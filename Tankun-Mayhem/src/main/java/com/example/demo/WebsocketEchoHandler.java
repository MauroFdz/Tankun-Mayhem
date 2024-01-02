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

public class WebsocketEchoHandler  extends TextWebSocketHandler{

	private Map<String,WebSocketSession> sessions=new ConcurrentHashMap<>();
	@Override
	public void afterConnectionEstablished(WebSocketSession session)throws Exception{
		System.out.println("Correcto");
		sessions.put(session.getId(), session);
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session,
			 CloseStatus status)throws Exception{
		sessions.remove(session.getId());
	}
	@Override
	protected void handleTextMessage(
			WebSocketSession session,
			TextMessage message) throws Exception {
			System.out.println(message.getPayload());
			/*ObjectMapper mapper=new ObjectMapper();
			JsonNode node= mapper.readTree(message.getPayload());
			System.out.println("Hola");
			ObjectNode onode=mapper.createObjectNode();
			onode.put("posx1",node.get("posx1").asText());
			onode.put("posy1",node.get("posy1").asText());
			onode.put("rot1",node.get("rot1").asText());
			onode.put("tur1",node.get("tur1").asText());
			onode.put("shot1",node.get("shot1").asText());
			onode.put("posx2",node.get("posx2").asText());
			onode.put("posy2",node.get("posy2").asText());
			onode.put("rot2",node.get("rot2").asText());
			onode.put("tur2",node.get("tur2").asText());
			onode.put("shot2",node.get("shot2").asText());
			System.out.println("Message received: " + onode.asText());*/
			for(WebSocketSession _session:sessions.values()){
				_session.sendMessage(new TextMessage(message.getPayload()));
			}
	}

}
