function change(index) {

    const p = document.querySelector('.show-classdemo');
    console.log('p', p);
    switch(index) {
        case 1:
            p.innerHTML = `<iframe src="./demo/w01_91/index.html" width="100%" height="100%" />`
        break;
        case 2:
            p.innerHTML = `<iframe src="./demo/w02_91/card_91.html" width="100%" height="100%" />`
        break;
        case 3:
            p.innerHTML = `<iframe src="./demo/w04_91/blog.html" width="100%" height="100%" />`
        break;
        case 4:
            p.innerHTML = `<iframe src="./demo/w06_91/blog.html" width="100%" height="100%" />`
        break;
        case 5:
            p.innerHTML = `<iframe src="./demo/w09_91/resume_91.html" width="100%" height="100%" />`
        break;
    }
}