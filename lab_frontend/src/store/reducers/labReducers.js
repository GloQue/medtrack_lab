import { ADD_LAB_DATA, DELETE_LAB_DATA, FETCH_LAB_DATA, UPDATE_LAB_DATA } from "../actions";

const initialState = {
    labInfo: [],
    loading: false,
    error: null
};

export const labReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LAB_DATA: {
            return { labInfo: [...state.labInfo, action.payload] };
        }

        case FETCH_LAB_DATA: {
            return {labInfo: action.payload}
        }

        case DELETE_LAB_DATA: {
            return { labInfo: state.labInfo.filter(item => item._id !== action.payload._id) };
        }

        case UPDATE_LAB_DATA: {
            return {
                labInfo: state.labInfo.map((item) =>
                    item._id === action.payload._id
                        ? {
                              ...item,
                              labName: action.payload.labName,
                              labType: action.payload.labType,
                              mainCategory: action.payload.mainCategory,
                              subCategory: action.payload.subCategory,
                              labCode: action.payload.labCode,
                              labPrice: action.payload.labPrice,
                          }
                        : item
                ),
            };
        }

        default:
            return state;
    }
};
