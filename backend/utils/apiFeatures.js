// Modified APIFeatures class
class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        if (this.queryStr.keyword) {
            this.query = this.query.find({
                name: {
                    $regex: this.queryStr.keyword,
                    $options: 'i'
                }
            });
        }
        return this;
    }

    filter() {
        const queryStrCopy = { ...this.queryStr };

        // Removing fields from query
        const removeFields = ['keyword', 'limit', 'page', 'ratings'];
        removeFields.forEach(field => delete queryStrCopy[field]);

        let queryStr = JSON.stringify(queryStrCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)/g, match => `$${match}`);

        this.query = this.query.find(JSON.parse(queryStr));

        return this;
    }

    paginate(resPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * (currentPage - 1);
        this.query = this.query.limit(resPerPage).skip(skip);
        return this;
    }
}

module.exports = APIFeatures;
