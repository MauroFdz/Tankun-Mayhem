package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication
@EnableWebSocket
public class TankunMayhemApplication implements WebSocketConfigurer{

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		// TODO Auto-generated method stub
		registry.addHandler(echoHandler(), "/echo")
		.setAllowedOrigins("*");
		registry.addHandler(selectHandler(), "/select")
		.setAllowedOrigins("*");
		registry.addHandler(echoChatHandler(), "/chatEcho")
        .setAllowedOrigins("*");
		
	}

	@Bean
	public WebsocketEchoHandler echoHandler() {
		return new WebsocketEchoHandler();
	}

	@Bean
	public WebsocketChatHandler echoChatHandler() {
    return new WebsocketChatHandler();
	}
	@Bean
	public WebsocketSelectHandler selectHandler() {
		return new WebsocketSelectHandler();
	}

	
	public static void main(String[] args) {
		SpringApplication.run(TankunMayhemApplication.class, args);
	}	

}
