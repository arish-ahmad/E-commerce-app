package com.ecomm.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.ecomm.services.customUserDetailService;



@EnableWebSecurity
@Configuration
public class securityConfig {
	
	@Autowired
	private customUserDetailService customUserDetailService;
	
	@Autowired
	private jwtAuthenticationFilter jwtfilter;
	
	@Autowired
	private authEntryPoint jwtEntryPoint;
	
	@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf()
            .disable()
            .authorizeRequests()
            .antMatchers("/token","/seller/signup","/user/signup","/product/get-all-popular-products","/product/all-products","/product/product-details/{productid}","/product/search/{key}","/email-verification","/generateOTP")          
            .permitAll()
            .anyRequest()
            .authenticated()
            .and()
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        	.and()
        	.exceptionHandling().authenticationEntryPoint(jwtEntryPoint);
        http.cors();
        
        http.addFilterBefore(jwtfilter, UsernamePasswordAuthenticationFilter.class);
        var defaultSecurityFilterChain=  http.build();
		return defaultSecurityFilterChain;
        
    }
	
	@Bean
	public DaoAuthenticationProvider DaoAuthentiacionprovider() {
		
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setUserDetailsService(customUserDetailService);
		provider.setPasswordEncoder(passwordEncoder());
		return provider;
		// TODO Auto-generated method stub

	}
	@Bean
	public PasswordEncoder passwordEncoder() {
		return NoOpPasswordEncoder.getInstance();
		
	}
	
	
	@Bean
	protected AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
		// TODO Auto-generated method stub
		return configuration.getAuthenticationManager();
	}


}
