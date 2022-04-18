function maxBall(v0) {
  /* Full Explanation */
  /*
    // * Description
    You throw a ball vertically upwards. The ball is in the form of a sphere.
    The ball initially moves with a speed of v (km per hour).
    The height (h) the ball bounces to each time (t) is given with the following formula:
    h = v*t - 0.5*g*t*t
    In the above formula, g represents the Earth's gravity (g ~ 9.81 m/s**2)
    
    Next, it is important to note that a device is recording the height of the ball at every 10th of a second.
    E.g., if v = 15 km/h, the device acquires the following readings:
    ~ (0, 0.0), (1, 0.367...), (2, 0.637...), (3, 0.808...), (4, 0.881..) ...
    The first number in the readings above is the time (in 10th of second format),
    and the second number is the height the ball bounces to in metres.
    
    // * Now onto the task
    We must write a function named "max_ball" with the parameter v (in km per hour).
    This function must return the following: time in 10th of second of the maximum height recorded by the device.
    
    // * Examples:
    max_ball(15) should return 4
    max_ball(25) should return 7
    
    // * Important things to note:
    - Remember to convert the velocity from km/h to m/s or from m/s to km/h as per requirement.
    - The maximmum height recorded by the device is not necassarily the maximum height reached by the ball.
    (remember, the device takes measurements every 10th of a second,
    meaning the ball may reach its maximum height in between 2 measurements taken by the device)
  */
  
  /* Implementation */
  // define variables to use within the height calculation formula
  let velocity = v0
  let gravity = 9.81
  let time = 0
  // define a set for storing all heights recorded by device
  let heights = []
  
  // define recursive function for calculating current height of ball
  const process = (oldHeight) => {
    // add 0.01 to time
    time += 0.1
    time = +time.toFixed(2)
    // derive current ball height using formula: h = v*t - 0.5*g*t*t
    let newHeight = ((velocity / 3.6) * time) - (0.5 * gravity * time * time)
    
    // if current height is less than previous height (ball falling now), break out of function
    if(oldHeight >= newHeight){
      return
    }else{
      // push current height to set of results
      heights.push(newHeight)
      // recurse
      return process(newHeight)
    }
  }
  // run function for the first time
  process()
                                                
  // log inputs / outputs
  console.log(v0)
  console.log(heights, heights.length)
  console.log(time)
  
  // get time of maximum height recorded by device, rounded to nearest 10th of a second
      
  //return heights.length - 1
  return ~~(time*10 - 1)
}

maxBall=v=>{
  z=(x,t)=>((t,y)=>x>y?t:z(y,t))(+(t+.1).toFixed(2),v/3.6*t-.5*9.81*t*t)    
  return ~~(z(0,0)*10-2)
}

maxBall=ᅠ=>ᅠ/3.5316+.5|0
