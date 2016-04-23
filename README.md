# 10secondWebSite
My Node Boilerplate for a quick web site

## Setup
The following setup is required:

### Initial Project Setup

#### Install node:
##### downgrade node to a particular version:
```bash
  sudo npm cache clean -f
  sudo npm install -g n
  sudo n 0.10.38
```
##### upgrade node to stable v
```bash
  sudo npm cache clean -f
  sudo npm install -g n
  sudo n stable
```

##### Install the following modules globally:

    $ npm install gulp@3.9.1 -g

##### Move to your project area (i.e. ~/code)

    $ cd ~/code
    
    
Setup the project:

    $ git clone https://github.com/matthewmcquaid/10secondWebSite.git
    $ cd 10secondWebSite
    $ npm install
    $ gulp server:start
    
## Release Process

## Gulp Tasks

### Start Server Start

```bash
   $ gulp server:start
```

### Server Unit Tests

```bash
   $ gulp unit-tests-server 
```

### Server Test Coverage

```bash
   $ gulp test-coverage-server
```
