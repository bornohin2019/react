const Main = () => {
  return (
    <div>
      {/*begin::App Main*/}
      <main className="app-main">
        {/*begin::App Content Top Area*/}
        <div className="app-content-top-area">
          {/*begin::Container*/}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div>App Content Top Area</div>
              </div>
              <div className="col-md-6 text-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                  name="save"
                  value="create"
                >
                  Create Admin
                </button>
              </div>
            </div>
          </div>
          {/*end::Container*/}
        </div>
        {/*end::App Content Bottom Area*/}
        {/*begin::App Content Header*/}
        <div className="app-content-header">
          {/*begin::Container*/}
          <div className="container-fluid">
            {/*begin::Row*/}
            <div className="row">
              <div className="col-sm-8">
                <h3 className="mb-0">Layout Custom Area</h3>
              </div>
              <div className="col-sm-4">
                <ol className="breadcrumb float-sm-end">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Fixed Layout
                  </li>
                </ol>
              </div>
            </div>
            {/*end::Row*/}
          </div>
          {/*end::Container*/}
        </div>
        {/*end::App Content Header*/}
        {/*begin::App Content*/}
        <div className="app-content">
          {/*begin::Container*/}
          <div className="container-fluid">
            {/*begin::Row*/}
            <div className="row">
              <div className="col-12">
                {/* Default box */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Title</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-lte-toggle="card-collapse"
                        title="Collapse"
                      >
                        <i data-lte-icon="expand" className="bi bi-plus-lg" />
                        <i data-lte-icon="collapse" className="bi bi-dash-lg" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-lte-toggle="card-remove"
                        title="Remove"
                      >
                        <i className="bi bi-x-lg" />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    Start creating your amazing application!
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">Footer</div>
                  {/* /.card-footer*/}
                </div>
                {/* /.card */}
              </div>
            </div>
            {/*end::Row*/}
          </div>
          {/*end::Container*/}
        </div>
        {/*end::App Content*/}
        {/*begin::App Content Bottom Area*/}
        <div className="app-content-bottom-area">
          {/*begin::Container*/}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div>App Content Bottom Area</div>
              </div>
              <div className="col-md-6 text-end">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  name="save"
                  value="create"
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>
          {/*end::Container*/}
        </div>
        {/*end::App Content Bottom Area*/}
      </main>
      {/*end::App Main*/}
    </div>
  );
};

export default Main;
