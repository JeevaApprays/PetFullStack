// springapp/src/main/java/com/examly/springapp/config/CorsConfig.java
package com.examly.springapp.config;

import org.springframework.context.annotation.*;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry reg){
        reg.addMapping("/api/**")
           .allowedOrigins("*")
           .allowedMethods("GET","POST","PUT","DELETE","OPTIONS");
    }
}