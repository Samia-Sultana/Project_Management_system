import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const ProjectDetail = () => {

  const [milestones, setMilestones] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/api/milestone/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'

          },

        });
        const data = await response.json();
        // Do something with the response data
        if (response.ok) {
          setMilestones(data.milestones);
          console.log(data.milestones);

        }

      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <div className="page-wrapper">

        <div className="content container-fluid">

          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Hospital Admin</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                  <li className="breadcrumb-item active">Project</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#edit_project"><i
                  className="fa fa-plus"></i> Edit Project</a>
              </div>
            </div>
            <div className="row board-view-header mt-md-3">
              <div className="col-12">
                <div className="pro-progress">
                  <div className="pro-progress-bar">
                    <h4>Progress</h4>
                    <div className="progress">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: "20%" }}></div>
                    </div>
                    <span>20%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <div className="project-task">
                    <ul className="nav nav-tabs nav-tabs-top nav-justified mb-0">
                      <li className="nav-item"><a className="nav-link active" href="#all_tasks" data-bs-toggle="tab"
                        aria-expanded="true">All Tasks</a></li>
                      <li className="nav-item"><a className="nav-link" href="#pending_tasks" data-bs-toggle="tab"
                        aria-expanded="false">Pending Tasks</a></li>
                      <li className="nav-item"><a className="nav-link" href="#completed_tasks" data-bs-toggle="tab"
                        aria-expanded="false">Completed Tasks</a></li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane show active" id="all_tasks">
                        <div className="task-wrapper">
                          <div className="task-list-container">
                            <div className="task-list-body">
                              <ul id="task-list">
                                {
                                  milestones?.map(item => {
                                    return (
                                      <li className="task" key={item.id}>
                                        <div className="task-container">
                                          <div className="avatar">
                                            <a href="" className="rounded-circle border border-white" data-bs-toggle="modal"
                                              data-bs-target="#status_user"><i className="fas fa-square"></i></a>
                                          </div>


                                          <Link to={`/milestone/${item.id}`}>{item.milestone_name}</Link>

                                          <span className="task-action-btn task-btn-right">
                                            <span className="action-circle large" title="Edit">
                                              <a href="" data-bs-toggle="modal" data-bs-target="#edit_project"><i
                                                className="fa fa-user-plus"></i></a>
                                            </span>
                                            <span className="action-circle large delete-btn" title="Delete Task">
                                              <i className="material-icons">delete</i>
                                            </span>
                                          </span>
                                        </div>
                                      </li>
                                    )
                                  })
                                }


                              </ul>
                            </div>
                            <div className="task-list-footer">
                              <div className="new-task-wrapper">
                                <textarea id="new-task" placeholder="Enter new task here"></textarea>
                                <span className="error-message hidden">You need to enter a task first</span>
                                <span className="add-new-task-btn btn" id="add-task">Add Task</span>
                                <span className="btn" id="close-task-panel">Close</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="pending_tasks"></div>
                      <div className="tab-pane" id="completed_tasks"></div>
                    </div>
                  </div>
                  <div className="project-title">
                    <h5 className="card-title">Hospital Administration</h5>
                    <small className="block text-ellipsis m-b-15"><span className="text-xs">2</span> <span className="text-muted">open
                      tasks, </span><span className="text-xs">5</span> <span className="text-muted">tasks
                        completed</span></small>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. className aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero
                    vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque
                    diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at
                    purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit
                    in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt
                    porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu
                    consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula.
                    Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at. </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. className aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero
                    vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque
                    diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at
                    purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit
                    in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt
                    porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu
                    consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula.
                    Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at. </p>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title m-b-15">Project details</h6>
                  <table className="table table-striped table-border">
                    <tbody>
                      <tr>
                        <td>Cost:</td>
                        <td className="text-end">$1200</td>
                      </tr>

                      <tr>
                        <td>In Date:</td>
                        <td className="text-end">25 Feb, 2019</td>
                      </tr>
                      <tr>
                        <td>Deadline:</td>
                        <td className="text-end">12 Jun, 2019</td>
                      </tr>
                      <tr>
                        <td>Priority:</td>
                        <td className="text-end">
                          <div className="btn-group">
                            <a href="#" className="badge badge-danger dropdown-toggle" data-bs-toggle="dropdown">Highest </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger"></i> Highest
                                priority</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info"></i> High
                                priority</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-primary"></i> Normal
                                priority</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success"></i> Low
                                priority</a>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Status:</td>
                        <td className="text-end">Working</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
              <div className="card project-user">
                <div className="card-body">
                  <h6 className="card-title m-b-20">Assigned Project Manager </h6>
                  <ul className="list-box">

                    <li>
                      <a href="#">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar"><img alt="" src="assets/img/profiles/avatar-01.jpg" /></span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">Lesley Grauer</span>
                            <div className="clearfix"></div>
                            <span className="message-content">Project Manager</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card project-user">
                <div className="card-body">
                  <h6 className="card-title m-b-20">
                    Assigned users
                  </h6>
                  <ul className="list-box">
                    <li>
                      <a href="profile.html">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar"><img alt="" src="assets/img/profiles/avatar-02.jpg" /></span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">John Doe</span>
                            <div className="clearfix"></div>
                            <span className="message-content">Web Designer</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="profile.html">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar"><img alt="" src="assets/img/profiles/avatar-09.jpg" /></span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">Richard Miles</span>
                            <div className="clearfix"></div>
                            <span className="message-content">Web Developer</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="assign_leader" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Assign Leader to this project</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="input-group m-b-30">
                  <input placeholder="Search to add a leader" className="form-control search-input" type="text" />
                  <button className="btn btn-primary">Search</button>
                </div>
                <div>
                  <ul className="chat-user-list">
                    <li>
                      <a href="#">
                        <div className="media d-flex">
                          <span className="avatar"><img alt="" src="assets/img/profiles/avatar-09.jpg" /></span>
                          <div className="media-body align-self-center text-nowrap">
                            <div className="user-name">Richard Miles</div>
                            <span className="designation">Web Developer</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="media d-flex">
                          <span className="avatar"><img alt="" src="assets/img/profiles/avatar-10.jpg" /></span>
                          <div className="media-body align-self-center text-nowrap">
                            <div className="user-name">John Smith</div>
                            <span className="designation">Android Developer</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="media d-flex">
                          <span className="avatar">
                            <img alt="" src="assets/img/profiles/avatar-16.jpg" />
                          </span>
                          <div className="media-body align-self-center text-nowrap">
                            <div className="user-name">Jeffery Lalor</div>
                            <span className="designation">Team Leader</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="status_user" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">

              <div className="modal-body">

                <div>
                  <ul className="chat-user-list">
                    <li>
                      <a href="#">
                        <div className="media d-flex">
                          <div className="media-body align-self-center text-nowrap">
                            <div className="user-name">TO DO</div>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <div className="media d-flex">
                          <div className="media-body align-self-center text-nowrap">
                            <div className="user-name">IN PROGRESS</div>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <div className="media d-flex">
                          <div className="media-body align-self-center text-nowrap">
                            <div className="user-name">DONE</div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="media d-flex">
                          <div className="media-body align-self-center text-nowrap">
                            <div className="user-name">COMPLETE</div>
                          </div>
                        </div>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="edit_project" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Project</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>

                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Project Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Start Date</label>
                        <div className="cal-icon">
                          <input className="form-control datetimepicker" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>End Date</label>
                        <div className="cal-icon">
                          <input className="form-control datetimepicker" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Budget</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Priority</label>
                        <select className="select">
                          <option>High</option>
                          <option>Medium</option>
                          <option>Low</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Status</label>
                        <select className="select">
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <label for="discountInput" className="form-label">Percentage</label>
                        <div className="input-group">
                          <input type="number" className="form-control" id="discountInput"
                            placeholder="Enter discount percentage" />
                          <span className="input-group-text">%</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectDetail;