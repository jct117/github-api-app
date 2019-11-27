$(function () {
  $('#repo-form').submit((event) => {
    event.preventDefault()
    console.log('form being submitted')

    const userName = $('#github-username').val()
    console.log(userName)

    // clear list and clear text field
    $('.repos').html('')
    $('#github-username').val('')

    search(userName)
  })

  function displayResults (repos) {
    console.log(repos)
    repos.forEach((repo) => {
      $('.repos').append(
        `<li>
          <a href='${repo.html_url}' target='_blank'>${repo.full_name}</a>
        </li>`
      )
    })
  }

  async function search (username) {
    // ** making API request using async/await **
    try {
      const url = `http://www.dnd5eapi.co/api/${username}`


      const response = await axios.get(url, {
        params: {

        }
      })

      console.log(response)
      // displayResults(response.data)
    } catch (error) {
      console.log(error)
      alert('an error occurred with your request')
    }
  }
})
