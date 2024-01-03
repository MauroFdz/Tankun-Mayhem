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
			for(WebSocketSession _session : sessions.values()) {
				if(!_session.getId().equals(session.getId())) {
					_session.sendMessage(new TextMessage(message.getPayload()));
				}
			}
	}

}
