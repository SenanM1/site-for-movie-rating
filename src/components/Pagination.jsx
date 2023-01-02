import PaginationCSS from './Pagination.module.css';

function Pagination(props) {
    let pages = [];

    for(let i = 1; i <= Math.ceil(props.totalPosts/props.postsPerPage); i++){
        pages.push(i);
    }

    return (
        <div className={PaginationCSS.content}>
            {
                pages.map((page, index) => {
                    return <button class={PaginationCSS.btn} key={index} onClick={() => props.setCurrentPage(page)}>{page}</button>
                })
            }
        </div>
    )
}

export default Pagination;