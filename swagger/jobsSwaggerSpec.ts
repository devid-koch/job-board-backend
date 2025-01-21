/**
 * @swagger
 * tags:
 *   - name: Jobs
 *     description: Job management operations
 */

/**
 * @swagger
 * /api/jobs:
 *   get:
 *     summary: Get all job postings
 *     description: Retrieve all job postings.
 *     tags:
 *       - Jobs
 *     responses:
 *       200:
 *         description: A list of job postings
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/jobs/{id}:
 *   get:
 *     summary: Get job posting by ID
 *     description: Retrieve a specific job posting by ID.
 *     tags:
 *       - Jobs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Job ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Job posting found
 *       404:
 *         description: Job posting not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/jobs:
 *   post:
 *     summary: Create a new job posting
 *     description: Create a job posting.
 *     tags:
 *       - Jobs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               company:
 *                 type: string
 *               location:
 *                 type: string
 *               salary:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Job posting created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/jobs/{id}:
 *   put:
 *     summary: Update a job posting
 *     description: Update an existing job posting by ID.
 *     tags:
 *       - Jobs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Job ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               company:
 *                 type: string
 *               location:
 *                 type: string
 *               salary:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Job posting updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: Job posting not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/jobs/{id}:
 *   delete:
 *     summary: Delete a job posting
 *     description: Delete a specific job posting by ID.
 *     tags:
 *       - Jobs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Job ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Job posting deleted
 *       404:
 *         description: Job posting not found
 *       500:
 *         description: Internal server error
 */
