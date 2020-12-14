import TableConstants from '../../constants/TableConstants';

export const getTableNameByStatus = (status) => {
    let list;
    if (status === 0) {
        list = TableConstants.TODO_LIST_NAME;
    } else if (status === 1) {
        list = TableConstants.IN_PROGRESS_LIST_NAME;
    } else {
        list = TableConstants.DONE_LIST_NAME;
    }

    return list;
}