const initialState = {
    openSidebar: false,
    popup: false
}

const Action = {
    Types: {
        UPDATE_STATE: '@@APP/UPDATE_STATE'
    },

    Creator: {
        updateState: (props) => ({
            Type: Action.Types.UPDATE_STATE,
            payload: props

        })
    }
}

const reducer = (state= initialState, action) => {
    console.log("action", action);
    switch (action.type) {
        default: return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
    }
}

export {reducer, Action}