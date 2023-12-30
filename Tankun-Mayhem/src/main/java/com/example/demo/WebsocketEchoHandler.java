package com.example.demo;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebsocketEchoHandler  extends TextWebSocketHandler{
	
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
			session.sendMessage(new TextMessage(message.getPayload()));
	}

}
