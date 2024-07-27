/**
 *  Copyright (c) 2024, The Intermission Orchestra at UC San Diego
 */
let currentPage = 1;
let itemsPerPage = 1;
const GRID_NUM = 6;
const galleryContainer = document.getElementById('gallery-container');
const galleryItems = Array.from(galleryContainer.children);

function renderGrid() {
    itemsPerPage = GRID_NUM;
    galleryContainer.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = galleryItems.slice(start, end);
    paginatedItems.forEach(item => {
        galleryContainer.appendChild(item);
    });
}

function renderSlideshow() {
    galleryContainer.innerHTML = '';
    galleryContainer.appendChild(galleryItems[currentPage - 1]);
}

function changePage(direction) {
    const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
    currentPage += direction;
    if (currentPage < 1) {
        currentPage = totalPages;
    } else if (currentPage > totalPages) {
        currentPage = 1;
    }
    if (itemsPerPage == GRID_NUM) {
        renderGrid();
    } else if (itemsPerPage == 1) {
        renderSlideshow();
    }
    updatePaginationInfo();
}

function updatePaginationInfo() {
    const pageInfo = document.getElementById('page-info');
    if (itemsPerPage == GRID_NUM) {
        pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(galleryItems.length / itemsPerPage)}`;
    } else if (itemsPerPage == 1) {
        let schoolTerm = galleryItems[currentPage - 1].getElementsByClassName('text')[0].innerHTML;
        pageInfo.textContent = schoolTerm;
    }
}
