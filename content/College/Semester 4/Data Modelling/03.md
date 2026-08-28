---

title: Week 3
draft: false
tags:
  - college
  - computer science
  - fourth semester
  - data
  - data modelling

---

# Data Warehousing

## Solution

### Subject Oriented

Data organized around key business subjects (sales, customers, products) rather than application processes.

Simplifies analysis because related facts and attributes are grouped for decision-making.

### Inntegrated

Data from multiple source systems is standardized (consistent keys, units, formats).

Resolves naming and type conflicts so reports are comparable.

### Time Variant

Stored data includes a time element (transaction date, effective date, load date).

Supports historical analysis and trend reporting.

### Stable

Data warehouse is relatively static compared to operational systems: changes come from scheduled loads, not live transactions.

Historical records are preserved for consistent reporting.

### Supporting management decision

Designed to answer business questions, support KPIs and strategic reporting.

Optimized for query performance and summarization rather than transaction processing.

## Data from the operational systems

### Extracted

Pull raw data from source systems (databases, files, APIs).

Choose full or incremental extraction depending on volume and freshness needs.

### Cleansed

Remove duplicates, fix obvious formatting errors, normalize units (e.g., currency, dates).

Validate mandatory fields and apply basic business rules.

### Transformed

Map source fields to DW schema; derive new fields (e.g., order_total = qty * price).

Apply lookups (customer IDs, product hierarchies) and type conversions.

### Aggregated

Compute summaries needed for reporting (daily sales, weekly inventory levels).

Build aggregate tables or materialized views to speed queries.

### Loaded into DW

Load cleansed/transformed data into target fact and dimension tables.

Use batch loads, micro-batches, or streaming based on SLAs; maintain load logs and error handling.

## Measures

### Additive

can be aggregated over all dimensions
ex. sales price

### Semi Additive

cannot be aggregated over some dimensions - typically time
ex. inventory

### Non-Additive

cannot be aggregated over any dimensions
ex. average sales price

## Schema Documentation

Table type: fact / dimension / staging / aggregate.

Primary key / surrogate key and foreign keys.

Column name, data type, nullable, business description.

Grain (row-level meaning) — e.g., "one row = one invoice line".

Refresh frequency and source system(s).

Retention policy and archival rules.

Important constraints or transformation rules (e.g., currency converted to USD at load).

Example row for clarity.

Owners / contact for questions.

## Example

### if data change

* Solution 01: No Special Handling

* Solution 02: Versioning rows with changing attributes

* Solution 03: Two versions of Changing Attribute

* Solution 04: Changing Dimension


# Data Warehousing(source system ->  staging area)

source systems (OLTP, files, APIs)
        |
        v
   staging area (raw extracts, same shape as source)
        |
   cleansing & transformation
        |
        v
data warehouse (dimensions + facts + aggregates)
        |
        v
BI / Reporting / Data Products



Staging area holds raw extracts for replay and debugging.

DW contains curated, documented data optimized for analysis.

BI layer reads from DW (or materialized aggregates) for dashboards and reports.
