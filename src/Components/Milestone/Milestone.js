import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const Milestone = () => {
    const [task, setTasks] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:8000/api/task/all`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'

                    },

                });
                const data = await response.json();
                // Do something with the response data
                if (response.ok) {
                    setTasks(data.tasks);
                    console.log(data.tasks);

                }

            } catch (error) {
                console.error(error);
            }

            
        }
        fetchData();
    }, [])
    return (
        <div>
            <AdminNavbar></AdminNavbar>

            <div className="page-wrapper">

                <div className="content container-fluid">

                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="page-title">Hospital Admin</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Task Board</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row board-view-header">

                        <div className="col-12 text-end">
                            <a href="#" className="btn btn-white float-end ms-2" data-bs-toggle="modal" data-bs-target="#add_task_board"><i
                                className="fa fa-plus"></i> Create Task</a>
                        </div>

                    </div>






                    <div className="kanban-board card mb-0 ">
                        <div className="card-body">
                            <div className="kanban-cont">



                                <div className="kanban-list kanban-list1 kanban-danger">

                                    {
                                        task?.map(item => {
                                            return (
                                                <div className="kanban-wrap">
                                                    <div className="card panel">
                                                        <div className="kanban-box">
                                                            <div className="task-board-header">
                                                                <div className="avatar">
                                                                    <a href="" className="rounded-circle border border-white" data-bs-toggle="modal"
                                                                        data-bs-target="#status_user"><i className="fas fa-square"></i></a>
                                                                </div>
                                                                <span className="status-title"><a href="task-view.html">Website redesign</a></span>
                                                                <div className="dropdown kanban-task-action">
                                                                    <a href="" data-bs-toggle="dropdown">
                                                                        <i className="fa fa-angle-down"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal"
                                                                            data-bs-target="#edit_task_modal">Edit</a>
                                                                        <a className="dropdown-item" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="task-board-body">
                                                                <div className="kanban-info">
                                                                </div>
                                                                <div className="kanban-footer">
                                                                    <span className="task-info-cont">
                                                                        <span className="task-date"><i className="fa fa-clock-o"></i> Sep 26</span>
                                                                        <span className="task-priority badge bg-inverse-danger">High</span>
                                                                    </span>

                                                                    <span className="task-users">
                                                                        <div className="avatar-group">
                                                                            <div className="avatar">
                                                                                <img className="avatar-img rounded-circle border border-white" alt="User Image"
                                                                                    src="assets/img/profiles/avatar-02.jpg" />
                                                                            </div>
                                                                            <div className="avatar">
                                                                                <img className="avatar-img rounded-circle border border-white" alt="User Image"
                                                                                    src="assets/img/profiles/avatar-09.jpg" />
                                                                            </div>
                                                                            <div className="avatar">
                                                                                <img className="avatar-img rounded-circle border border-white" alt="User Image"
                                                                                    src="assets/img/profiles/avatar-12.jpg" />
                                                                            </div>
                                                                            <div className="avatar">
                                                                                <a href="" className="avatar-title rounded-circle border border-white"
                                                                                    data-bs-toggle="modal" data-bs-target="#assign_user"><i className="fa fa-plus"></i></a>
                                                                            </div>
                                                                        </div>
                                                                    </span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            )
                                        }
                                        )
                                    }
                                    
                                </div>





                            </div>
                        </div>
                    </div>




                </div>

                <div id="add_task_board" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Task Board</h4>
                                <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Task Name</label>
                                        <input type="text" className="form-control" />
                                    </div>


                                    <div className="form-group">
                                        <label>Start Date</label>
                                        <div className="cal-icon">
                                            <input className="form-control datetimepicker" type="text" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>End Date</label>
                                        <div className="cal-icon">
                                            <input className="form-control datetimepicker" type="text" />
                                        </div>
                                    </div>



                                    <div className="form-group">
                                        <label>Status</label>
                                        <select className="select">
                                            <option>REVIEW</option>
                                            <option>IN PROGRESS</option>
                                            <option>COMPLETE</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Priority</label>
                                        <select className="select">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </div>


                                    <div className="m-t-20 text-center">
                                        <button className="btn btn-primary btn-lg">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="edit_task_board" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Task Board</h4>
                                <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Task Board Name</label>
                                        <input type="text" className="form-control"  />
                                    </div>
                                    <div className="form-group task-board-color">
                                        <label>Task Board Color</label>
                                        <div className="board-color-list">
                                            <label className="board-control board-primary">
                                                <input name="radio" type="radio" className="board-control-input"   />
                                                <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-success">
                                                <input name="radio" type="radio" className="board-control-input"  />
                                                <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-info">
                                                <input name="radio" type="radio" className="board-control-input"  />
                                                <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-purple">
                                                <input name="radio" type="radio" className="board-control-input"  />
                                                <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-warning">
                                                <input name="radio" type="radio" className="board-control-input"  />
                                                <span className="board-indicator"></span>
                                            </label>
                                            <label className="board-control board-danger">
                                                <input name="radio" type="radio" className="board-control-input"  />
                                                <span className="board-indicator"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="m-t-20 text-center">
                                        <button className="btn btn-primary btn-lg">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="new_project" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Create New Project</h4>
                                <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Project Name</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn">Create Project</button>
                                    </div>
                                </form>
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
                                                    <span className="avatar flex-shrink-0"><img alt="" src="assets/img/profiles/avatar-09.jpg" /></span>
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
                                                    <span className="avatar flex-shrink-0"><img alt="" src="assets/img/profiles/avatar-10.jpg" /></span>
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
                                                    <span className="avatar flex-shrink-0">
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
                            <div className="modal-header">
                                <h5 className="modal-title">Assign the user to this project</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
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






                <div id="assign_user" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Assign the user to this project</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="input-group m-b-30">
                                    <input placeholder="Search a user to assign" className="form-control search-input" type="text" />
                                    <button className="btn btn-primary">Search</button>
                                </div>
                                <div>
                                    <ul className="chat-user-list">
                                        <li>
                                            <a href="#">
                                                <div className="media d-flex">
                                                    <span className="avatar flex-shrink-0"><img alt="" src="assets/img/profiles/avatar-09.jpg" /></span>
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
                                                    <span className="avatar flex-shrink-0"><img alt="" src="assets/img/profiles/avatar-10.jpg" /></span>
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
                                                    <span className="avatar flex-shrink-0">
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


                <div id="add_task_modal" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Task</h4>
                                <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Task Name</label>
                                        <input type="text" className="form-control" />
                                    </div>


                                    <div className="form-group">
                                        <label>Start Date</label>
                                        <div className="cal-icon">
                                            <input className="form-control datetimepicker" type="text" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>End Date</label>
                                        <div className="cal-icon">
                                            <input className="form-control datetimepicker" type="text" />
                                        </div>
                                    </div>



                                    <div className="form-group">
                                        <label>Status</label>
                                        <select className="select">
                                            <option>REVIEW</option>
                                            <option>IN PROGRESS</option>
                                            <option>COMPLETE</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Priority</label>
                                        <select className="select">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </div>
                                    <div className="submit-section text-center">
                                        <button className="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="edit_task_modal" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Task</h4>
                                <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Task Name</label>
                                        <input type="text" className="form-control" />
                                    </div>


                                    <div className="form-group">
                                        <label>Start Date</label>
                                        <div className="cal-icon">
                                            <input className="form-control datetimepicker" type="text" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>End Date</label>
                                        <div className="cal-icon">
                                            <input className="form-control datetimepicker" type="text" />
                                        </div>
                                    </div>



                                    <div className="form-group">
                                        <label>Status</label>
                                        <select className="select">
                                            <option>REVIEW</option>
                                            <option>IN PROGRESS</option>
                                            <option>COMPLETE</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Priority</label>
                                        <select className="select">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </div>
                                    <div className="submit-section text-center">
                                        <button className="btn btn-primary submit-btn">Submit</button>
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

export default Milestone;