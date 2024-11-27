import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    // Send Data to Server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-center font-extrabold text-3xl">Add Coffee</h1>
      <form onSubmit={handleAddCoffee}>
        {/* Form name & quantity Row */}
        <div className="md:flex gap-4">
          <div className="w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
                type="text"
                placeholder="Coffee Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Available Quantity</span>
              </div>
              <input
                type="text"
                placeholder="Available Quantity"
                name="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Form supplier & taste Row */}
        <div className="md:flex gap-4">
          <div className="w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Supplier Name</span>
              </div>
              <input
                type="text"
                placeholder="Supplier"
                name="supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
              <input
                type="text"
                placeholder="Taste"
                name="taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Form category & details Row */}
        <div className="md:flex gap-4">
          <div className="w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                placeholder="Details"
                name="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Form photo url Row */}
        <div className="">
          <div className="w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="ADD COFFEE"
          className="btn btn-block btn-neutral mt-6"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
