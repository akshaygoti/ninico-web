const initial_state = {
    carts: [],
    Wishlist: [],
    quantities: []
}

export const cartreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            state.carts = state.carts.filter((item) => item.id !== action.payload.id)
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        case "REMOVE_TO_CART":
            state.carts = state.carts.filter((item) => item.id !== action.payload);
            console.log("filter ", state.carts)
            return {
                ...state,
                carts: [...state.carts]
            }

        case "INCREMENT_TO_CART": {
            let inc_cart = state.carts.map((item) => {
                if (item.id == action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            })
            return {
                ...state,
                carts: inc_cart
            }
        }

        case "DECREMENT_TO_CART": {
            let dec_cart = state.carts;
            if (action.payload.quantity !== 1) {
                dec_cart = state.carts.map(item => {
                    if (item.id == action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        };
                    }
                    return item;
                });
            }
            return {
                ...state,
                carts: dec_cart
            }
        }

        case "UPDATE_QUANTITY":
            return {
                ...state,
                quantities: {
                    ...state.quantities,
                    [action.payload.id]: action.payload.quantity
                }
            }

        case "ADD_TO_WISHLIST":
            state.Wishlist = state.Wishlist.filter((item) => item.id !== action.payload.id)
            return {
                ...state,
                Wishlist: [...state.Wishlist, action.payload]
            }

        case "REMOVE_TO_WISHLIST":
            state.Wishlist = state.Wishlist.filter((item) => item.id !== action.payload);
            console.log("filter ", state.Wishlist)
            return {
                ...state,
                Wishlist: [...state.Wishlist]
            }

        case "INCREMENT_TO_WISHLIST": {
            let inc_wistlist = state.Wishlist.map((item) => {
                if (item.id == action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            })
            return {
                ...state,
                Wishlist: inc_wistlist
            }
        }

        case "DECREMENT_TO_WISHLIST": {
            let dec_wish = state.Wishlist;
            if (action.payload.quantity !== 1) {
                dec_wish = state.Wishlist.map(item => {
                    if (item.id == action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        };
                    }
                    return item;
                });
            }
            return {
                ...state,
                Wishlist: dec_wish
            }
        }

        default:
            return state;
    }
}