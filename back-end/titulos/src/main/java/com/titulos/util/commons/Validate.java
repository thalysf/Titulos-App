package com.titulos.util.commons;

import org.springframework.stereotype.Component;

@Component
public class Validate {
    public boolean isNullOrEmpty(String str)
    {
        if(str == null)
            return true;
        else
            return str.isEmpty();
    }
}
