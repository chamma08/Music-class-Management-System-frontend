import React, { Component } from 'react'

class HeaderComponent extends Component {
 constructor(props) {
    super(props)

    this.state = {

    }
 }
 

  render() {
    return (
      <div>
        <header className=''>
            <nav class="navbar navbar-expand-lg navbar-light bg-light " style={{width: '100%',borderRadius: '5px',paddingLeft:'10px'}}>

                <a class="navbar-brand " style={{padding:'5px',gap:'8px'}} href="/">Note Nexus</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" style={{justifyContent:'space-between'}} id="navbarSupportedContent">

                    <ul class="navbar-nav ">

                        <li class="nav-item active">
                            <a class="nav-link" href="/teachers">Teachers List</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/students">Students List</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/class-details">Class Details</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
      </div>
    )
  }
}

export default HeaderComponent