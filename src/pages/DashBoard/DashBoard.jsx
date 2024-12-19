import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import UploadResume from '../../components/FileUpload/FileUpload'


function DashBoard() {
  return (
    <div>
        <Navbar/>
       <UploadResume/>
      </div>

  )
}

export default DashBoard