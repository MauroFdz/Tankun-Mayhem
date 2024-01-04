package com.example.demo;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebsocketSelectHandler extends TextWebSocketHandler{
	int nPlayers=0,nReady=0;
	ObjectMapper mapper=new ObjectMapper();
	String jugador1="",jugador2="",tank1,tank2;
	boolean ready1=false,ready2=false;
	private Map<String,WebSocketSession> sessions=new ConcurrentHashMap<>();
	@Override
	public void afterConnectionEstablished(WebSocketSession session)throws Exception{
		nPlayers++;
		sessions.put(session.getId(), session);
		ObjectNode node=new ObjectMapper().createObjectNode();
		node.put("jugador1", jugador1);
		node.put("jugador2", jugador2);
		node.put("tank1","");
		node.put("tank2","");
		node.put("status", "notReady");
		session.sendMessage(new TextMessage(node.toString()));
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session,
			 CloseStatus status)throws Exception{
		nPlayers--;
		sessions.remove(session.getId());
	}
	
	@Override
	protected void handleTextMessage(
			WebSocketSession session,
			TextMessage message) throws Exception {
			System.out.println(message.getPayload());
			JsonNode jnode= mapper.readTree(message.getPayload());
			System.out.println(jugador1);
			System.out.println(jnode.get("status").asText());
			if(jnode.get("status").asText().equals("connecting")) {
				if(jugador1.equals("")) 
				{
					jugador1=jnode.get("nombre").asText();
					session.sendMessage(new TextMessage("player1"));
				}
				else if(jugador2.equals("")) 
				{
					jugador2=jnode.get("nombre").asText();
					session.sendMessage(new TextMessage("player2"));
				}
			}

			if(jnode.get("status").asText().equals("ready")) {
				if(jnode.get("player1").asBoolean()) 
				{
					tank1=jnode.get("tank").asText();
					ready1=true;
				}
				else if(!jnode.get("player1").asBoolean()) 
				{
					tank2=jnode.get("tank").asText();
					ready2=true;
				}
			}
			if(ready1&&ready2) {

				ObjectNode node=mapper.createObjectNode();
				node.put("jugador1", jugador1);
				node.put("jugador2", jugador2);
				node.put("tank1", tank1);
				node.put("tank2", tank2);
				node.put("status", "ready");
				ready1=false;
				ready2=false;
				jugador1="";
				jugador2="";
				for(WebSocketSession _session:sessions.values()){
					_session.sendMessage(new TextMessage(node.toString()));
				}
			}
	}
}
