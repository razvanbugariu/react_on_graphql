package rbu.demo.graphql.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class PasswordEncrypterConfig {

    @Bean
    public BCryptPasswordEncoder beanifyBCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
