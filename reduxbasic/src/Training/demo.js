import { createStore } from 'redux';

//Khởi tạo trạng thái ban đầu của state
var initialState = {
    status: false,
    sort: {
        by: 'name',
        value: 1
    }
}

//Tham số (là 1 function) truyền vào hàm createStore
//Reduce là đối tượng nhận vào 2 tham số: state ban đầu và action: object chứa thuộc tính type để dùng switchcase xét xem thực hiện hành động gì dựa vào type đó xong trả về state mới
var myReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_STATUS') {
        state.status = !state.status;
        return state;
    }
    if (action.type === 'SORT') {
        /*         state.sort = {
            by: action.sort.by,
            value: action.sort.value
        } */
        var { status } = state;
        var { by, value } = action.sort;
        return {
            status: status,
            sort: {
                by: by,
                value: value
            }
        }
    }
    return state;
}

//Tạo store: là nơi chứa các state
const store = createStore(myReducer);
console.log('DEFAULT: ', store.getState());

//Thực hiện công việc thay đổi status
var action = { type: 'TOGGLE_STATUS' };
store.dispatch(action);
console.log('TOGGLE_STATUS: ', store.getState());

// Thực hiện công việc sắp xếp name từ Z-A
var sortAction = {
    type: 'SORT',
    sort: {
        by: 'name',
        value: -1
    }
}
store.dispatch(sortAction);
console.log('SORT: ', store.getState());
