import { ADD_PHARMACY_DATA, DELETE_PHARMACY_DATA, FETCH_PHARMACY_DATA, UPDATE_PHARMACY_DATA } from "../actions";

const initialState = {
    pharmacyInfo: []
};

export const pharmacyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PHARMACY_DATA: {
            return { pharmacyInfo: [...state.pharmacyInfo, action.payload] };
        }

        case FETCH_PHARMACY_DATA: {
            return {pharmacyInfo: action.payload}
        }

        case DELETE_PHARMACY_DATA: {
            return { pharmacyInfo: state.pharmacyInfo.filter(item => item._id !== action.payload._id) };
        }

        case UPDATE_PHARMACY_DATA: {
            return {
                pharmacyInfo: state.pharmacyInfo.map((item) =>
                    item._id === action.payload._id
                        ? {
                              ...item,
                              drugName: action.payload.drugName,
                              description: action.payload.description,
                              unitPrice: action.payload.unitPrice,
                              drugCode: action.payload.drugCode,
                              drugPrice: action.payload.drugPrice,
                          }
                        : item
                ),
            };
        }

        default:
            return state;
    }
};
