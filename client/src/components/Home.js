import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    axios
      .get('https://mudgame-pam.herokuapp.com/api/adv/rooms/')
      .then(res => setRooms([...res.data.message]))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    drawPlayer()
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    // ctx.fillRect(0, 950, 50, 50)

    // ctx.fillStyle = '#FF1111'
    // ctx.fillRect(560, 500, 50, 50)

    // const north = 0
    // const south = 0
    // const east = 0
    // const west = 0
    let x = 500
    let y = 500
    rooms.forEach(room => {
      if (room.north) {
        ctx.fillStyle = '#FF0000'
        ctx.fillRect(x, y, 50, 50)
        y += 70
      }
      if (room.west) {
        ctx.fillStyle = 'green'
        ctx.fillRect(x, y, 50, 50)
        x -= 70
      }
      if (room.east) {
        ctx.fillStyle = 'brown'
        ctx.fillRect(x, y, 50, 50)
        x += 70
      }

      if (room.south) {
        ctx.fillStyle = '#FF0000'
        ctx.fillRect(x, y, 50, 50)
        y -= 70
      }
    })
  }, [rooms])

  let deltaX = 500
  let deltaY = 500

  const clearRect = () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    return ctx.clearRect(deltaX, deltaY, 40, 40)
  }

  const drawPlayer = () => {
    clearRect()
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'blue'
    ctx.fillRect(deltaX, deltaY, 40, 40)
  }

  const movePlayer = e => {
    clearRect()
    switch (e.keyCode) {
      case 37:
        // left keypad
        deltaX -= 70
        break
      case 38:
        // up keypad
        deltaY -= 70
        break
      case 39:
        //right keypad
        deltaX += 70
        break
      case 40:
        // down keypad
        deltaY += 70
        break
      default:
        break
    }
    e.preventDefault()

    drawPlayer()
  }
  return (
    <div>
      <div>Welcome to the MUD game</div>
      <div>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>
      <div>
        {window.addEventListener('keydown', movePlayer, false)}
        <canvas
          id='canvas'
          style={{ border: '2px solid red', background: 'grey' }}
          width='1000'
          height='1000'
        ></canvas>
        {/* {drawPlayer} */}
      </div>
    </div>
  )
}

export default Home
