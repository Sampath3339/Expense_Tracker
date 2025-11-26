export default function ExpenseList({ expenses, onEdit, onDelete }) {
  const total = expenses.reduce((sum, e) => sum + parseInt(e.amount), 0);

  return (
    <div>
      <h3>All Expenses</h3>

      <table className="table table-striped table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {expenses.length > 0 ? (
            expenses.map((e) => (
              <tr key={e.id}>
                <td>{e.title}</td>
                <td>₹{e.amount}</td>
                <td>{e.category}</td>
                <td>{e.date}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(e)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => onDelete(e.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="5" className="text-center">No Data</td></tr>
          )}
        </tbody>
      </table>

      <h4 className="text-end">Total: ₹{total}</h4>
    </div>
  );
}
