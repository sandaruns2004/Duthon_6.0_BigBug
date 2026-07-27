const { z } = require('zod');

// ═══════════════════════════════════════════════════════════════════
// Zod Validation Schemas for Transaction Service
// ═══════════════════════════════════════════════════════════════════

const transferSchema = z.object({
  fromAccountId: z.string().min(1, 'Source account ID is required'),
  toAccountId: z.string().min(1, 'Destination account ID is required'),
  amount: z.union([z.number().positive(), z.string()]),
  currency: z.string().optional().default('LKR'),
  description: z.string().optional()
});

const validate = (schema) => (req, res, next) => {
  try {
    const parsed = schema.parse(req.body);
    req.body = parsed;
    next();
  } catch (err) {
    if (err instanceof z.ZodError) {
      const fieldErrors = err.errors.map((e) => ({
        field: e.path.join('.'),
        message: e.message
      }));
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: fieldErrors
      });
    }
    next(err);
  }
};

module.exports = {
  transferSchema,
  validate
};
