const initialState = {
   car1Avail: true,
   car1Name: '',
   car1Cont: '',
   car1Issue: '',
   car1Ret: '',

   car2Avail: true,
   car2Name: '',
   car2Cont: '',
   car2Issue: '',
   car2Ret: '',

   car3Avail: true,
   car3Name: '',
   car3Cont: '',
   car3Issue: '',
   car3Ret: '',

   car4Avail: true,
   car4Name: '',
   car4Cont: '',
   car4Issue: '',
   car4Ret: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RENT1':
            return {
                ...state,
                car1Avail: false,
            };
        case 'NAME1':
            return {
                ...state,
                car1Name: action.car1Name,
            };
        case 'CONTACT1':
            return {
                ...state,
                car1Cont: action.car1Cont,
            };
        case 'ISSUE1':
            return {
                ...state,
                car1Issue: action.car1Issue,
            };
        case 'RETURN1':
            return {
                ...state,
                car1Ret: action.car1Ret,
            };

        case 'RENT2':
            return {
                ...state,
                car2Avail: false,
            };
        case 'NAME2':
            return {
                ...state,
                car2Name: action.car2Name
            };
        case 'CONTACT2':
            return {
                ...state,
                car2Cont: action.car2Cont
            };
        case 'ISSUE2':
            return {
                ...state,
                car2Issue: action.car2Issue,
            };
        case 'RETURN2':
            return {
                ...state,
                car2Ret: action.car2Ret
            };

        case 'RENT3':
            return {
                ...state,
                car3Avail: false
            };
        case 'NAME3':
            return {
                ...state,
                car3Name: action.car3Name,
            };
        case 'CONTACT3':
            return {
                ...state,
                car3Cont: action.car3Cont,
            };
        case 'ISSUE3':
            return {
                ...state,
                car3Issue: action.car3Issue,
            };
        case 'RETURN3':
            return {
                ...state,
                car3Ret: action.car3Ret,
            };

        case 'RENT4':
            return {
                ...state,
                car4Avail: false
            };
        case 'NAME4':
            return {
                ...state,
                car4Name: action.car4Name,
            };
        case 'CONTACT4':
            return {
                ...state,
                car4Cont: action.car4Cont
            };
        case 'ISSUE4':
            return {
                ...state,
                car4Issue: action.car4Issue
            };
        case 'RETURN4':
            return {
                ...state,
                car4Ret: action.car4Ret,
            };
        default:
            return state;
    }
};

export default reducer;