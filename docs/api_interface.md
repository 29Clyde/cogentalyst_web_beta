# Fannie Mae RAG API Documentation

## Overview

The Fannie Mae RAG API provides intelligent mortgage underwriting assistance using Retrieval-Augmented Generation (RAG) technology. The system processes questions about mortgage requirements and loan eligibility by searching through the complete Fannie Mae Selling Guide (1,183 pages, 362 sections) and generating accurate responses with source citations.

## Base URL

```
https://kp7udk1kac.execute-api.us-east-1.amazonaws.com/prod
```

## Authentication

Currently, no authentication is required. The API is publicly accessible for demonstration purposes.

## Endpoints

### 1. Question Answering

**Endpoint:** `POST /question`

**Description:** Submit freeform questions about mortgage underwriting requirements, eligibility criteria, documentation needs, and other Fannie Mae guidelines.

**Request Format:**
```json
{
  "question": "string"
}
```

**Request Example:**
```json
{
  "question": "What are the DTI requirements for conventional loans?"
}
```

**Response Format:**
```json
{
  "answer": "string",
  "sources": [
    {
      "section_id": "string",
      "title": "string", 
      "page_number": "integer",
      "document": "string"
    }
  ]
}
```

**Response Example:**
```json
{
  "answer": "For manually underwritten conventional loans, Fannie Mae's maximum total debt-to-income (DTI) ratio is 36% of the borrower's stable monthly income (Section B3-6-02, page 505). This maximum can be exceeded up to 45% if the borrower meets specific credit score and reserve requirements outlined in the Eligibility Matrix (Section B3-6-02, page 505). For loans underwritten through Desktop Underwriter (DU), the maximum allowable DTI ratio is 50% (Section B3-6-02, page 505).",
  "sources": [
    {
      "section_id": "B3-6-02",
      "title": "Debt-to-Income Ratios",
      "page_number": 505,
      "document": "FNMA Selling Guide"
    },
    {
      "section_id": "B3-4.3-08", 
      "title": "Employer Assistance",
      "page_number": 248,
      "document": "FNMA Selling Guide"
    }
  ]
}
```

### 2. Loan Underwriting Analysis

**Endpoint:** `POST /underwrite`

**Description:** Analyze specific loan scenarios against Fannie Mae underwriting requirements. Provide loan characteristics to receive eligibility assessment and documentation requirements.

**Request Format:**
```json
{
  "ltv": "number",
  "dti": "number", 
  "credit_score": "number",
  "property_type": "string",
  "occupancy": "string"
}
```

**Required Fields:**
- `ltv`: Loan-to-Value ratio (percentage, e.g., 85)
- `dti`: Debt-to-Income ratio (percentage, e.g., 28)  
- `credit_score`: Borrower credit score (e.g., 740)

**Optional Fields:**
- `property_type`: Property type (default: "Single Family")
- `occupancy`: Occupancy type (default: "Primary")

**Request Example:**
```json
{
  "ltv": 85,
  "dti": 28,
  "credit_score": 740,
  "property_type": "Single Family",
  "occupancy": "Primary"
}
```

**Response Format:**
```json
{
  "loan_data": {
    "ltv": "number",
    "dti": "number",
    "credit_score": "number", 
    "property_type": "string",
    "occupancy": "string"
  },
  "analysis": "string",
  "requirements": [
    {
      "requirement": "string",
      "source": {
        "document": "string",
        "section": "string", 
        "page": "number"
      }
    }
  ]
}
```

## Sample API Calls

### Using curl

**Question API:**
```bash
curl -X POST "https://kp7udk1kac.execute-api.us-east-1.amazonaws.com/prod/question" \
  -H "Content-Type: application/json" \
  -d '{"question": "What credit score is required for Fannie Mae loans?"}'
```

**Underwriting API:**
```bash
curl -X POST "https://kp7udk1kac.execute-api.us-east-1.amazonaws.com/prod/underwrite" \
  -H "Content-Type: application/json" \
  -d '{
    "ltv": 80,
    "dti": 25, 
    "credit_score": 750,
    "property_type": "Single Family",
    "occupancy": "Primary"
  }'
```

### Using JavaScript (fetch)

```javascript
// Question API
const questionResponse = await fetch('https://kp7udk1kac.execute-api.us-east-1.amazonaws.com/prod/question', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    question: "What are the income documentation requirements?"
  })
});

const questionData = await questionResponse.json();

// Underwriting API  
const underwriteResponse = await fetch('https://kp7udk1kac.execute-api.us-east-1.amazonaws.com/prod/underwrite', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    ltv: 90,
    dti: 30,
    credit_score: 720,
    property_type: "Condo",
    occupancy: "Primary"
  })
});

const underwriteData = await underwriteResponse.json();
```

## Error Handling

**HTTP Status Codes:**
- `200`: Success
- `400`: Bad Request - Invalid or missing required parameters
- `500`: Internal Server Error - Processing error

**Error Response Format:**
```json
{
  "error": "string"
}
```

**Common Error Examples:**
```json
{
  "error": "Question is required"
}
```

```json
{
  "error": "LTV, DTI, and credit_score are required"
}
```

## Response Times

- **Cold Start:** 3-5 seconds (first request after inactivity)
- **Warm Requests:** 1-3 seconds  
- **Timeout:** 60 seconds maximum

Cold starts occur when the serverless functions haven't been used recently and need to initialize, including loading the complete vector dataset from S3.

## Data Source

All responses are generated from the **Fannie Mae Selling Guide (September 3, 2025 version)**. The system contains 362 processed sections covering:

- Borrower eligibility requirements
- Income and employment verification
- Credit requirements and credit scores
- Debt-to-income ratio guidelines  
- Property and appraisal requirements
- Loan-to-value ratio limits
- Documentation requirements
- Underwriting guidelines and exceptions

## Rate Limits

Currently no rate limits are implemented. This is a demonstration API and should not be used for high-volume production applications.

## CORS Support

The API includes CORS headers allowing cross-origin requests from web applications:
- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: POST, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type, Authorization`

## Technical Architecture

- **Infrastructure:** AWS Lambda serverless functions
- **Vector Search:** 768-dimensional embeddings using Google text-embedding-004  
- **Language Model:** Google Gemini 1.5 Flash for response generation
- **Data Storage:** S3-based vector store with 362 document sections
- **API Gateway:** AWS API Gateway with Lambda proxy integration

## Best Practices

1. **Specific Questions:** More specific questions yield better, more targeted responses
2. **Professional Terminology:** Use mortgage industry terms for optimal results
3. **Error Handling:** Always implement proper error handling for API calls
4. **Timeout Handling:** Account for cold start delays in your application design
5. **Source Attribution:** Always display source citations to users for transparency

## Example Use Cases

- **Loan Officers:** Quick reference for underwriting requirements
- **Mortgage Processors:** Documentation requirement lookup
- **Compliance Teams:** Policy verification and guidance
- **Training Applications:** Interactive mortgage education tools
- **Decision Support Systems:** Automated eligibility pre-screening

## Support

This is a proof-of-concept API developed for demonstration purposes. For technical questions or integration support, refer to the project documentation or contact the development team.

## Changelog

- **v1.0** - Initial release with question answering and loan analysis endpoints
- **Data Version** - Fannie Mae Selling Guide (September 3, 2025)