import React, { Component, Fragment } from 'react'

export default class FooterComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }

  render() {
    return (
      <footer className="footer text-center bg-body-tertiary">
        
        <div class="text-center p-3" style={{backgroundColor: (0, 0, 0, 0.05)}}>
          © 2024 Copyright - Music Class Management System
        </div>
  
    </footer>
      
    )
  }
}
