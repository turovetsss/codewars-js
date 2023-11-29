export const dotest = () => {
    // eslint-disable-next-line no-unused-vars
    class PaginationHelper {
        constructor(collection, itemsPerPage) {
            this.collection = collection;
            this.itemsPerPage = itemsPerPage;
        }

        pageCount() {
            return Math.ceil(this.collection.length / this.itemsPerPage);
        }

        itemCount() {
            return this.collection.length;
        }

        pageItemCount(pageIndex) {
            if (pageIndex >= 0 && pageIndex < this.pageCount()) {
                if (pageIndex === this.pageCount() - 1) {
                    return this.collection.length % this.itemsPerPage;
                }
                return this.itemsPerPage;
            }
            return -1;
        }

        pageIndex(itemIndex) {
            if (itemIndex >= 0 && itemIndex < this.itemCount()) {
                return Math.floor(itemIndex / this.itemsPerPage);
            }
            return -1;
        }
    }
};

// eslint-disable-next-line max-len
console.log(dotest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 10));
