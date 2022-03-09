import { createContext, useState } from "react";

const ColorContext = createContext({ 
    state : { color: "black" }, 
    action : { setColor: () => {} }, 
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState("black");

    const value = {
        state : { color },
        action : { setColor },
    };
    
    return (
    <ColorContext.Provider value={value}>
        {children}
    </ColorContext.Provider>
    );
}

//const ColorConsumer = colorContext.Consumer;
const { Consumer: ColorConsumer} = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;