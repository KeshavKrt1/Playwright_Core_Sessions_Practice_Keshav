//workers = processes --> nodeJS
// workers help in the sequential or parallel execution mode

//workers = 1 : sequential mode
//workers = 4 (greater than 1) : parallel mode

//default workers count: cpu (Logical) core count --->  (eg: 12/2 = 6 workers )

//cpu core: 1, w:4: sequence

//fullyparallel = true, w=4
//total tcs = 82 (test case pool)
//all the files and their testcases also will start running in the parallel mode
//make sure that all the testcases are independent

//tc1: order id = 123
//tc2: order id = 123

//fullyparallel = false, w=4
//w1 -- file 1 (10 tcs) --  10 tcs will run in sequential mode
//w2 -- file 2 (5 tcs) -- 5 tcs will run in the sequential mode
//w3 -- file 3
//w4 -- file 4


