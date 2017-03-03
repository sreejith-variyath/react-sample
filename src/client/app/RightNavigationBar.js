var React = require('react');
import '../../../node_modules/elemental/less/elemental.less';
import { Link } from 'react-router';
import { Row, Col } from 'elemental';
import {Button,Glyphicon,ButtonGroup} from 'react-bootstrap';
var NavMenu = {
  height: '100%', 
  width: '15%',
  float: 'left',
  backgroundColor: '#c0c0c0',
};

var RightNavigationBar= React.createClass({
	render:function (){
	return (<div className="nav-side-menu">
    <div className="brand">INFO DNA</div>
    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
        <div className="menu-list">
            <ul id="menu-content" className="menu-content collapse out">
                <li>
                  <a href="#">
                  <i className="fa fa-dashboard fa-lg"></i> Dashboard
                  </a>
                </li>
              <li  data-toggle="collapse" data-target="#products" className="collapsed active">
                  <a href="#"><i className="fa fa-briefcase fa-lg"></i> Collection <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="products">
                    <li className="active"><Link to="/prospect">Collections List</Link></li>
                </ul>
                <li data-toggle="collapse" data-target="#service" className="collapsed">
                  <a href="#"><i className="fa fa-globe fa-lg"></i> Services <span className="arrow"></span></a>
                </li>  
                <ul className="sub-menu collapse" id="service">
                  <li>New Service 1</li>
                  <li>New Service 2</li>
                  <li>New Service 3</li>
                </ul>
                <li data-toggle="collapse" data-target="#new" className="collapsed">
                  <a href="#"><i className="fa fa-car fa-lg"></i> Reports <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="new">
                  <li>New New 1</li>
                  <li>New New 2</li>
                  <li>New New 3</li>
                </ul>
                 <li>
                  <a href="#">
                  <i className="fa fa-user fa-lg"></i> Profile
                  </a>
                  </li>
                 <li>
                  <a href="#">
                  <i className="fa fa-users fa-lg"></i> Users
                  </a>
                </li>
            </ul>
     </div>
</div>);
  }
});

export default RightNavigationBar;
