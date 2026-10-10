-- ==========================================================
-- FULL-STACK ANALYTICS HUB DATABASE SCHEMA (PostgreSQL)
-- ==========================================================

-- 1. Create Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    account_tier VARCHAR(20) DEFAULT 'standard',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create Transactions Table with Foreign Key
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    amount DECIMAL(12, 2) NOT NULL,
    category VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'completed',
    transaction_date TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create Composite Index for Query Optimization
CREATE INDEX idx_transactions_user_date ON transactions(user_id, transaction_date);

-- 4. Analytical Query: Monthly Revenue Aggregation per Category
-- (Demonstrates GROUP BY, SUM, COUNT, and sorting)
SELECT 
    category,
    COUNT(id) AS total_transactions,
    SUM(amount) AS gross_revenue,
    ROUND(AVG(amount), 2) AS average_ticket_size
FROM transactions
WHERE status = 'completed'
GROUP BY category
ORDER BY gross_revenue DESC;