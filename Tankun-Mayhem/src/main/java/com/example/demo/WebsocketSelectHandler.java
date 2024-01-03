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
		node.put("nombre", "");
		node.put("jugador1", (nPlayers==1)?true:false);
		node.put("ready", false);
		node.put("tank","");
		//session.sendMessage(new TextMessage(node.toString()));
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
			
			if(jugador1==""||jugador1==jnode.get("nombre").asText()) {
				jugador1=jnode.get("nombre").asText();
				tank1=jnode.get("tank").asText();
				ready1=true;
			}
			if(jugador2==""||jugador2==jnode.get("nombre").asText()) {
				jugador2=jnode.get("nombre").asText();
				tank2=jnode.get("tank").asText();
				ready2=true;
			}
			if(ready1&&ready2) {
				ObjectNode node=mapper.createObjectNode();
				node.put("jugador1", jugador1);
				node.put("jugador2", jugador2);
				node.put("tank1", tank1);
				node.put("tank2", tank2);
				for(WebSocketSession _session:sessions.values()){
					_session.sendMessage(new TextMessage(node.toString()));
				}
			}
	}
}
