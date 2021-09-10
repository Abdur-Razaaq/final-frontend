function delBook(id) {
    console.log(id)
    if (confirm("Are you sure you want to delete this book?")) {
        fetch(`https://sleepy-retreat-77815.herokuapp.com/delete-book/${id}/`)
        window.location.reload()
    }
}