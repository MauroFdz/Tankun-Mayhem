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
	boolean P1=true;
	private Map<String,WebSocketSession> sessions=new ConcurrentHashMap<>();
	@Override
	public void afterConnectionEstablished(WebSocketSession session)throws Exception{
		nPlayers++;
		sessions.put(session.getId(), session);
		ObjectNode node=new ObjectMapper().createObjectNode();
		node.put("nombre", "");
		node.put("jugador1", false);
		node.put("ready", false);
		node.put("tank","");
		//session.sendMessage(new TextMessage(node.toString()));
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session,
			 CloseStatus status)throws Exception{
		nPlayers--;
		P1=true;
		sessions.remove(session.getId());
	}
	
	@Override
	protected void handleTextMessage(
			WebSocketSession session,
			TextMessage message) throws Exception {
			System.out.println(message.getPayload());
			JsonNode jnode= mapper.readTree(message.getPayload());
			ObjectNode node=mapper.createObjectNode();
			node.put("nombre", jnode.get("nombre").asText());
			System.out.println(P1);
			boolean isP1=P1;
			P1=false;
			System.out.println(P1);
			node.put("jugador1", isP1);
			node.put("ready", jnode.get("ready").asText());
			node.put("tank", jnode.get("tank").asText());
			for(WebSocketSession _session:sessions.values()){
				_session.sendMessage(new TextMessage(node.toString()));
			}
	}
}
