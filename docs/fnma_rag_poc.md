# FNMA RAG Proof of Concept Documentation

## Project Overview

### Purpose and Goals
This proof-of-concept (PoC) demonstrates a Retrieval-Augmented Generation (RAG) system designed specifically for mortgage underwriting assistance. The primary objective is to create a portfolio project that showcases technical proficiency in building and deploying AI solutions for the mortgage industry.

**Business Objectives:**
- Demonstrate capability to build AI solutions tailored for mortgage origination
- Showcase understanding of mortgage domain knowledge and regulatory requirements
- Create an impressive technical portfolio piece for potential employers in mortgage technology
- Prove competency in modern AI/ML deployment patterns using AWS services

**Success Criteria:**
The successful development and deployment of this PoC should result in employment opportunities within the mortgage technology sector, specifically demonstrating:
- RAG architecture implementation
- AWS serverless deployment experience
- Domain-specific AI application development
- Vector database and embedding technologies

## Architecture Overview

### High-Level Architecture
The system implements a serverless RAG architecture on AWS, designed for cost-effectiveness and scalability:

```
Frontend (React) → API Gateway → Lambda Functions → Vector Store (LanceDB) + LLM (Google Gemini)
                                      ↓
                               Document Processing Pipeline
                                      ↓
                               S3 (Source Documents)
```

### Design Decisions and Rationale

**1. Serverless Architecture**
- **Decision:** AWS Lambda + API Gateway + serverless components
- **Rationale:** Cost-effective for PoC with minimal idle costs, automatic scaling, no infrastructure management
- **Alternative Considered:** EC2-based deployment rejected due to ongoing costs and complexity

**2. Vector Database Choice: LanceDB**
- **Decision:** LanceDB stored on S3
- **Rationale:** Serverless, cost-effective, simple file-based storage, no persistent infrastructure costs
- **Alternative Considered:** Amazon OpenSearch rejected due to higher costs and complexity for single-user PoC

**3. Embedding Strategy: Google API**
- **Decision:** Google's text-embedding-004 via API
- **Rationale:** High-quality embeddings, simple implementation, no model deployment complexity
- **Alternative Considered:** SageMaker serverless inference rejected due to container size limits (13.6GB > 10GB limit)

**4. LLM Choice: Google Gemini**
- **Decision:** Google Gemini 1.5 Flash via API
- **Rationale:** Integrated with embedding API, cost-effective, good performance for mortgage domain queries
- **Alternative Considered:** Claude API integration prepared as backup option

**5. Document Processing Strategy**
- **Decision:** Table-of-contents guided extraction
- **Rationale:** Leverages document's existing structure for accurate section boundaries and attribution
- **Alternative Considered:** Arbitrary chunking rejected due to poor section boundary detection

## Implementation Status

### Completed Components

#### 1. Document Processing Pipeline (`src/document_processor.py`)
**Status: ✅ Complete and Tested**

**Functionality:**
- Downloads Fannie Mae Selling Guide PDF from S3 bucket (`s3://fnma-rag-source-docs/`)
- Extracts table of contents from pages 3-12, identifying 367 section entries
- Uses TOC-guided extraction to find content for each identified section
- Successfully extracted content for 362/367 sections (98.6% success rate)
- Preserves document structure with section IDs, titles, and page references

**Key Metrics:**
- Source Document: 1,183 pages
- Sections Identified: 367
- Sections Successfully Extracted: 362
- Average Section Length: 550 words
- Section Length Range: 29-1,415 words

#### 2. Vector Store Implementation (`src/vector_store.py`)
**Status: ✅ Complete and Tested**

**Functionality:**
- Integrates with Google's text-embedding-004 API for high-quality embeddings
- Creates LanceDB vector store with 362 document sections
- Implements semantic search with cosine similarity
- Provides structured results with section IDs, titles, page numbers, and similarity scores

**Performance Validation:**
- DTI query returns exact "Debt-to-Income Ratios" section (B3-6-02, page 505)
- Credit score queries return relevant "Credit Score Requirements" sections
- Property appraisal queries return multiple relevant appraisal sections
- Similarity scores range 0.56-0.76 indicating good semantic matching

#### 3. RAG Engine (`src/rag_engine.py`)
**Status: ✅ Complete and Tested**

**Functionality:**
- Combines vector search with Google Gemini for answer generation
- Formats context from retrieved sections with proper attribution
- Generates comprehensive answers citing specific section numbers and page references
- Handles both freeform Q&A and structured underwriting analysis scenarios

#### 4. S3-Based Vector Store for Lambda (`rag_engine_s3.py`)
**Status: ✅ Complete and Deployed**

**Functionality:**
- Cloud-compatible RAG engine optimized for AWS Lambda
- Loads vector data from S3 (`s3://fnma-rag-source-docs/vector_db/vectors.json`)
- Performs in-memory similarity search using cosine distance
- Integrates with Google Gemini for answer generation

**Technical Implementation:**
- Vector data exported from LanceDB to JSON format for Lambda compatibility
- Efficient numpy-based similarity calculations
- Automatic caching of vector data in Lambda memory
- Complete 362 sections with 768-dimensional embeddings

#### 5. AWS Infrastructure Setup
**Status: ✅ Complete and Deployed**

**Completed Infrastructure:**
- S3 bucket for source documents: `fnma-rag-source-docs`
- Lambda functions deployed with S3-based code packages
- API Gateway REST API with CORS support
- IAM roles with appropriate permissions for Lambda execution
- EC2 development environment with full AWS deployment permissions

#### 6. Production-Ready Serverless API Backend
**Status: ✅ Fully Deployed and Operational**

**Live API Endpoints:**
- **Base URL:** `https://kp7udk1kac.execute-api.us-east-1.amazonaws.com/prod`
- **POST /question** - Freeform Q&A about mortgage requirements
- **POST /underwrite** - Structured loan analysis

**Validated Performance:**
- Successfully processing mortgage underwriting queries
- Response times: 1-3 seconds (warm), 3-5 seconds (cold start)
- Complete 362-section vector dataset accessible via S3
- Google Gemini integration providing accurate responses with source citations

**Lambda Functions (Production Configuration):**
- `fnma-rag-question-handler`: 66MB package, 1024MB memory, 60s timeout
- `fnma-rag-underwrite-handler`: 66MB package, 1024MB memory, 60s timeout
- Environment variables configured for Google API integration
- S3 permissions validated and functional

**Infrastructure Features:**
- Serverless architecture with pay-per-request pricing
- CORS-enabled for cross-origin frontend integration
- API Gateway with proper error handling
- S3-based deployment successfully overcoming AWS Lambda size constraints
- IAM roles with least-privilege access principles

**API Documentation:**
- Comprehensive API documentation created for external integration
- Request/response specifications with examples
- Error handling documentation
- Sample code in multiple programming languages

#### 7. Development Environment
**Status: ✅ Complete**

**Configuration:**
- EC2 instance (t3.large) running Deep Learning AMI Ubuntu 24.04
- Python virtual environment with required dependencies
- VS Code Remote-SSH integration for seamless development
- GitHub repository integration: `/FNMA_SG_RAG/`
- Terraform infrastructure-as-code deployment

### Recently Completed Deployments

#### 1. Lambda Deployment Architecture
**Challenge Solved:** Initial Lambda packages exceeded AWS 70MB direct upload limit
**Solution Implemented:** S3-based deployment with optimized packaging
- Lambda packages stored in S3 and referenced by Terraform
- Increased Lambda memory to 1024MB for vector data loading
- Extended timeout to 60 seconds for S3 data retrieval and processing

#### 2. Vector Store Migration
**Migration Completed:** LanceDB to S3-compatible JSON format
- Exported 362 sections with embeddings to `vectors.json`
- Uploaded to `s3://fnma-rag-source-docs/vector_db/vectors.json`
- Lambda functions now load complete vector dataset from S3 on initialization

#### 3. Import Resolution and Error Handling
**Issue Resolved:** Module import errors in Lambda deployment
- Updated Lambda functions to import `rag_engine_s3` module correctly
- Added comprehensive error handling and logging
- Implemented graceful fallbacks for S3 loading failures

### Not Yet Implemented

#### 1. React Frontend
**Status: ❌ Not Started**

**Planned Features:**
- Single-page application with two primary user journeys
- Q&A interface for freeform mortgage questions
- Structured form for loan underwriting analysis
- Results display with source attribution
- AWS Cognito authentication integration

#### 2. AWS Cognito Authentication
**Status: ❌ Not Started**

**Planned Implementation:**
- Single pre-configured user account
- OAuth-based access control
- API Gateway integration for secured endpoints

#### 3. AWS Amplify Deployment
**Status: ❌ Not Started**

**Planned Features:**
- Automated CI/CD pipeline from GitHub repository
- Static site hosting for React application
- Integration with backend API endpoints

## Technical Specifications

### Data Processing Results
- **Document Source:** Fannie Mae Selling Guide (September 3, 2025 version)
- **Total Pages:** 1,183
- **Processing Method:** TOC-guided section extraction
- **Success Rate:** 362/367 sections (98.6%)
- **Vector Dimensions:** 768 (Google text-embedding-004)
- **Storage Format:** S3-based JSON for Lambda compatibility

### Backend API Endpoints

**Base URL:** https://kp7udk1kac.execute-api.us-east-1.amazonaws.com/prod

**Status:** ✅ Deployed and Functional

### Endpoints:
- `POST /question` - Freeform Q&A about mortgage requirements  
- `POST /underwrite` - Structured loan analysis

### Test Commands:
```bash
# Test Q&A
curl -X POST "https://kp7udk1kac.execute-api.us-east-1.amazonaws.com/prod/question" \
  -H "Content-Type: application/json" \
  -d '{"question": "What are the DTI requirements for conventional loans?"}'

# Test underwriting
curl -X POST "https://kp7udk1kac.execute-api.us-east-1.amazonaws.com/prod/underwrite" \
  -H "Content-Type: application/json" \
  -d '{"ltv": 85, "dti": 28, "credit_score": 740, "property_type": "Single Family", "occupancy": "Primary"}'
```

### Lambda Function Specifications
- **Runtime:** Python 3.12
- **Memory:** 1024MB (optimized for vector data loading)
- **Timeout:** 60 seconds (allows for S3 data retrieval and processing)
- **Package Size:** ~66MB each (deployed via S3 references)
- **Cold Start:** ~3-5 seconds (includes S3 vector data loading)

### API Design
```json
POST /question
{
  "question": "What are the DTI requirements for conventional loans?"
}

Response:
{
  "answer": "Based on Section B3-6-02...",
  "sources": [
    {
      "section_id": "B3-6-02",
      "title": "Debt-to-Income Ratios",
      "page_number": 505,
      "document": "FNMA Selling Guide"
    }
  ]
}
```

```json
POST /underwrite
{
  "ltv": 85,
  "dti": 28,
  "credit_score": 740,
  "property_type": "Single Family",
  "occupancy": "Primary"
}

Response:
{
  "loan_data": { ... },
  "analysis": "Based on the provided criteria...",
  "requirements": [
    {
      "requirement": "Review Debt-to-Income Ratios",
      "source": {
        "document": "FNMA Selling Guide",
        "section": "B3-6-02",
        "page": 505
      }
    }
  ]
}
```

### Cost Projections
**Monthly Operational Costs (Estimated):**
- Google API calls: $10-20
- AWS Lambda executions: <$5
- API Gateway requests: <$5
- S3 storage: <$2
- **Total Estimated:** $15-30/month

## Next Steps for Completion

1. **Test and Validate Backend API**
   - Verify Lambda function deployments are complete
   - Test both `/question` and `/underwrite` endpoints
   - Debug any remaining S3 vector loading issues
   - Validate response quality and source attribution

2. **Build React Frontend**
   - Create component structure for Q&A and underwriting interfaces
   - Implement API service integration with deployed endpoints
   - Add basic styling and user experience enhancements
   - Handle loading states and error conditions

3. **Implement Authentication**
   - Configure AWS Cognito user pool
   - Integrate with API Gateway
   - Add frontend authentication flow

4. **Deploy and Test Complete System**
   - Deploy frontend via AWS Amplify
   - Conduct end-to-end testing
   - Performance optimization and error handling

5. **Documentation and Portfolio Presentation**
   - Create demonstration scenarios
   - Document architectural decisions and lessons learned
   - Prepare technical presentation materials

## Key Achievements to Date

1. **Successful Document Processing:** Achieved 98.6% extraction success rate using innovative TOC-guided approach
2. **High-Quality Vector Search:** Demonstrated accurate semantic search with relevant section retrieval
3. **Working RAG Pipeline:** Complete question-answering system with proper source attribution
4. **Deployed Serverless Architecture:** Cost-effective, scalable infrastructure successfully deployed to AWS
5. **Lambda Integration:** Overcame deployment challenges with S3-based package delivery and optimized configurations
6. **Complete Backend API:** Two functional endpoints providing mortgage underwriting assistance via RESTful API
7. **Domain Expertise:** Successfully processed and made searchable the complete Fannie Mae Selling Guide

## Current System Status

**Backend Infrastructure:** ✅ Fully Operational
- API Gateway endpoints responding
- Lambda functions deployed with 66MB packages
- S3 vector store accessible to Lambda functions
- CORS configuration complete for frontend integration

**Data Pipeline:** ✅ Complete and Validated  
- 362 mortgage underwriting sections processed and vectorized
- Google embeddings successfully generating semantic search results
- Complete document coverage with source attribution

**Next Priority:** Frontend development to provide user interface for the deployed RAG system.

This PoC demonstrates practical implementation of modern AI/ML technologies applied to a specific business domain, showcasing both technical depth and business understanding valuable to mortgage technology employers. The successful deployment of a complete serverless RAG system with real mortgage domain data represents significant technical achievement suitable for portfolio demonstration.