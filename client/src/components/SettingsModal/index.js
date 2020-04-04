import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';


const SettingsModal = (props) => {
  console.log("MODAL", props)
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <span style={{cursor: "pointer" }}onClick={toggle}>Settings</span>
      <Modal isOpen={modal} className={className}>
         
        <ModalHeader toggle={toggle} ><b>Settings</b></ModalHeader>
        <ModalBody>
        <div><h3><b>Choose a Theme</b></h3></div>
            <div>              
              <Row>
                <Col size="md-3">
                  <div className="modal-theme"  type="submit" id="theme1" onClick={() => props.setTheme("theme1")}>
                    <div className="modal-img-container">                   
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 1" title="Mountain Waterfall" src={require('../../images/theme1.jpg')} />                   
                    </div>                  
                  </div>
                </Col>
                <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme2" onClick={() => props.setTheme("theme2")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 2" title="Rocky Landscape Daylight" src={require('../../images/theme2.jpg')} />           
                    </div>                  
                  </div>
                </Col>
                <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme3" onClick={() => props.setTheme("theme3")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 3" width="40" height="40" title="Desert Landscape Tree" src={require('../../images/theme3.jpg')} />           
                    </div>                  
                  </div>
                </Col>                
              </Row>
              <Row>
              <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme4" onClick={() => props.setTheme("theme4")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 4" width="40" height="40" title="Landscape Field Skyfall" src={require('../../images/theme4.jpg')} />           
                    </div>                  
                  </div>
                </Col>
                <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme5" onClick={() => props.setTheme("theme5")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 5" width="40" height="40" title="Iceland Waterfall" src={require('../../images/theme5.jpg')} />            
                    </div>                  
                  </div>
                </Col>
                <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme6" onClick={() => props.setTheme("theme6")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 6" width="40" height="40" title="Rocky Waterfall" src={require('../../images/theme6.jpg')} />            
                    </div>                  
                  </div>
                </Col>                
              </Row>
              <Row>
              <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme7" onClick={() => props.setTheme("theme7")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 7" width="40" height="40" title="Landscape Day Cloud" src={require('../../images/theme7.jpg')} />            
                    </div>                  
                  </div>
                </Col>
                <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme8" onClick={() => props.setTheme("theme8")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 8" width="40" height="40" title="Sunset at Hale Azarya" src={require('../../images/theme8.jpg')} />            
                    </div>                  
                  </div>
                </Col>
                <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme9" onClick={() => props.setTheme("theme9")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 9" width="40" height="40" title="Black Gold Marble" src={require('../../images/theme9.jpg')} />            
                    </div>                  
                  </div>
                </Col>
              </Row>
              <Row>                
                <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme10" onClick={() => props.setTheme("theme10")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 10" width="40" height="40" title="Black White Marble" src={require('../../images/theme10.jpg')} />            
                    </div>                  
                  </div>
                </Col>
                <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme11" onClick={() => props.setTheme("theme11")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 11" width="40" height="40" title="Rain Forest Waterfall" src={require('../../images/theme11.jpg')} />            
                    </div>                  
                  </div>
                </Col>
                <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme12" onClick={() => props.setTheme("theme12")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 12" width="40" height="40" title="Brown Circle Marble" src={require('../../images/theme12.jpg')} />            
                    </div>                  
                  </div>
                </Col>
              </Row>
              <Row>
              <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme13" onClick={() => props.setTheme("theme13")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 13" width="40" height="40" title="Gold Marble" src={require('../../images/theme13.jpg')} />            
                    </div>                  
                  </div>
                </Col>
                <Col size="md-3">
                  <div className="modal-theme" type="submit" title="White" id="theme14" onClick={() => props.setTheme("theme14")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10, border: "double"}} alt="" width="40" height="40" src={require('../../images/theme14.jpg')} />            
                    </div>                  
                  </div>
                </Col>
                <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme15" onClick={() => props.setTheme("theme15")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 15" width="40" height="40" title="Pink Curly Marble" src={require('../../images/theme15.jpg')} />            
                    </div>                  
                  </div>
                </Col>                
              </Row>
              <Row>                
                <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme16" onClick={() => props.setTheme("theme16")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 16" width="40" height="40" title="Galaxy" src={require('../../images/theme16.jpg')} />            
                    </div>                  
                  </div>
                </Col>
                <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme0" onClick={() => props.setTheme("theme0")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Theme 16" width="40" height="40" title="Rock Light Waterfall" src={require('../../images/theme0.jpg')} />            
                    </div>                  
                  </div>
                </Col>
                <Col size="md-3">
                  <div className="modal-theme" type="submit" id="theme17" onClick={() => props.setTheme("theme17")}>
                    <div className="modal-img-container">
                      <img style={{ width: 60, height: 50, marginTop: 10, marginRight: 10, marginLeft: 10}} alt="Users" width="40" height="40" title="Users Picture" src={require('../../images/theme17.jpg')} />
                    </div>                  
                  </div>
                </Col>
              </Row>
              <Row>
                <Col size="md-12">              
                  <span>.</span>
                </Col>
              </Row>
              <Row>
                <Col size="md-12">
                  <ModalFooter className="create-acc-btn">
                    <Button toggle={toggle} title="Save changes" type="submit" onClick={() => props.updateDBtheme()} color="info" size="sm" >Save</Button>                   
                    <Button toggle={toggle} title="Change your picture" type="submit" onClick={() => props.addPicture()} color="info" size="sm" >Change Your Picture</Button>
                  </ModalFooter>
                </Col>
              </Row>
            </div>
        </ModalBody>        
                
      </Modal>
    </div>
  );
}

export default SettingsModal;