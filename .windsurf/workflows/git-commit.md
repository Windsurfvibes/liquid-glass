---
description: Git commit & push
---

commit and push the code following this guideline 


# Git Commit Guidelines

## 1. Quick Reference

### 1.1 Single-Line Commits (Preferred)
```bash
# Safe single-line commit and push
git add . && git commit -m "type(scope): description" && git push

# Example:
git add . && git commit -m "feat(auth): add OAuth2 integration" && git push
```

### 1.2 Multi-Line Commits (For Complex Changes)
```bash
# Safe multi-line commit using temporary file
echo "type(scope): brief description

- Detail 1
- Detail 2" > .git/COMMIT_EDITMSG && git commit -F .git/COMMIT_EDITMSG && git push
```

## 2. Commit Message Format

### 2.1 Structure
```
type(scope): brief description
```

### 2.2 Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Test changes
- `chore`: Maintenance

### 2.3 Scopes
- `api`: API changes
- `ui`: UI changes
- `db`: Database
- `auth`: Authentication
- `rules`: Cursor rules
- `docs`: Documentation
- `test`: Testing
- `core`: Core functionality

## 3. Error Prevention

### 3.1 ✅ CORRECT Patterns
```bash
# Single quotes
git commit -m 'feat(auth): add login flow'

# Double quotes
git commit -m "fix(api): resolve timeout issue"

# File-based for multi-line
echo "feat(ui): add responsive layout

- Add mobile breakpoints
- Implement flex containers
- Update media queries" > .git/COMMIT_EDITMSG && git commit -F .git/COMMIT_EDITMSG
```

### 3.2 ❌ INCORRECT Patterns
```bash
# DON'T use newlines in -m flag
git commit -m "feat(ui): add layout
- Add breakpoints
- Update styles"

# DON'T use multiple -m flags
git commit -m "feat(ui): add layout" -m "- Add breakpoints"
```

## 4. Best Practices

### 4.1 Message Guidelines
1. Use imperative mood ("add" not "adds")
2. Keep first line under 50 characters
3. No period at end of subject line
4. Be specific and clear
5. Reference issue numbers when relevant

### 4.2 Commit Organization
1. Make atomic commits (one logical change)
2. Verify changes before committing
3. Run tests before pushing
4. Review the diff before committing
5. Keep commits focused and small

## 5. Common Patterns

### 5.1 Feature Work
```bash
git commit -m "feat(user): add email verification"
git commit -m "feat(auth): implement 2FA support"
```

### 5.2 Bug Fixes
```bash
git commit -m "fix(api): resolve rate limiting issue"
git commit -m "fix(ui): correct button alignment"
```

### 5.3 Documentation
```bash
git commit -m "docs(api): update endpoint documentation"
git commit -m "docs(setup): add deployment guide"
```

### 5.4 Refactoring
```bash
git commit -m "refactor(core): optimize data processing"
git commit -m "refactor(auth): simplify login flow"
```

## 6. Recovery Procedures

### 6.1 Fix Last Commit
```bash
# Amend commit message
git commit --amend -m "type(scope): corrected message"

# Amend commit content
git add forgotten-file
git commit --amend --no-edit
```

### 6.2 Split Failed Commit
```bash
# Reset last commit
git reset HEAD~1

# Commit changes separately
git add feature-files
git commit -m "feat(scope): first part"
git add test-files
git commit -m "test(scope): add tests"
```

## 7. Automation

### 7.1 Git Aliases
```bash
# Add to ~/.gitconfig
[alias]
  # Commit with message
  cm = "!f() { git commit -m \"$1\"; }; f"
  
  # Add, commit, and push
  acp = "!f() { git add . && git commit -m \"$1\" && git push; }; f"
  
  # Safe multi-line commit
  mcm = "!f() { echo \"$1\" > .git/COMMIT_EDITMSG && git commit -F .git/COMMIT_EDITMSG; }; f"
```

### 7.2 Shell Functions
```bash
# Add to ~/.zshrc or ~/.bashrc

# Safe single-line commit
commit() {
  git add . && git commit -m "$1" && git push
}

# Safe multi-line commit
mcommit() {
  echo "$1" > .git/COMMIT_EDITMSG && git commit -F .git/COMMIT_EDITMSG && git push
}
```

## 8. Pre-commit Checklist

1. Code Quality
   - Run linters
   - Check formatting
   - Remove debug code
   - Run tests

2. Security
   - No sensitive data
   - No API keys
   - No credentials
   - Check file permissions

3. Commit Message
   - Correct type and scope
   - Clear description
   - No newlines in -m flag
   - Reference issues if applicable

4. Changes
   - Review diff
   - Verify file inclusions
   - Check for unintended changes
   - Confirm test coverage 

## 9. Mandatory Diff Review

### 9.1 Pre-Commit Diff Check
Before any commit, ALWAYS run:
```bash
# Check status first
git status | cat

# Then review changes in detail
git diff | cat

# For staged changes
git diff --staged | cat
```

### 9.2 Diff Review Checklist
1. File Changes
   - Confirm all intended files are modified
   - No unintended file deletions
   - No sensitive files exposed

2. Code Changes
   - Review each chunk of changes
   - Verify line deletions are intentional
   - Check for debugging code
   - Confirm formatting changes

3. Large Changes Warning
   - If more than 500 lines changed, break into smaller commits
   - For large deletions, double-check necessity
   - Request confirmation for significant file removals

4. Post-Review Actions
   - Address any unintended changes
   - Remove debug statements
   - Fix formatting issues
   - Split into multiple commits if needed 