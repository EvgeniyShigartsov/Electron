const information = document.getElementById('info')


const fn = async () => {
  const ping = await versions.ping()

  information.innerText = ping

  console.log(ping)
}

fn()