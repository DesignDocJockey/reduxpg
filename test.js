'use strict';


let data = [
    {
     "key_as_string": "2016-09-01",
     "total_volume": {
      "value": 177210762914.87427
     }
    },
    {
     "key_as_string": "2016-10-01",
     "total_volume": {
      "value": 76815069383.42729
     }
    },
    {
     "key_as_string": "2016-11-01",
     "total_volume": {
      "value": 38896891866.98745
     }
    },
    {
     "key_as_string": "2016-12-01",
     "total_volume": {
      "value": 145307771724.1305
     }
    },
    {
     "key_as_string": "2016-09-01",
     "total_volume": {
      "value": 121058577357.66626
     }
    },
    {
     "key_as_string": "2016-10-01",
     "total_volume": {
      "value": 73853793101.39131
     }
    },
    {
     "key_as_string": "2016-11-01",
     "total_volume": {
      "value": 143133061918.39252
     }
    },
    {
     "key_as_string": "2016-12-01",
     "total_volume": {
      "value": 333144103962.4948
     }
    },
    {
     "key_as_string": "2016-09-01",
     "total_volume": {
      "value": 67383443981.2194
     }
    },
    {
     "key_as_string": "2016-10-01",
     "total_volume": {
      "value": 21169581368.037224
     }
    },
    {
     "key_as_string": "2016-11-01",
     "total_volume": {
      "value": 375516918046.37134
     }
    },
    {
     "key_as_string": "2016-12-01",
     "total_volume": {
      "value": 109197041862.84709
     }
    },
    {
     "key_as_string": "2016-09-01",
     "total_volume": {
      "value": 38289680866.32367
     }
    },
    {
     "key_as_string": "2016-10-01",
     "total_volume": {
      "value": 74787266601.24246
     }
    },
    {
     "key_as_string": "2016-11-01",
     "total_volume": {
      "value": 38530373036.55003
     }
    },
    {
     "key_as_string": "2016-12-01",
     "total_volume": {
      "value": 141756543312.41318
     }
    },
    {
     "key_as_string": "2016-09-01",
     "total_volume": {
      "value": 25254700571.354065
     }
    },
    {
     "key_as_string": "2016-10-01",
     "total_volume": {
      "value": 98069298739.94356
     }
    },
    {
     "key_as_string": "2016-11-01",
     "total_volume": {
      "value": 69575939757.53122
     }
    },
    {
     "key_as_string": "2016-12-01",
     "total_volume": {
      "value": 35920118289.14097
     }
    },
    {
     "key_as_string": "2016-09-01",
     "total_volume": {
      "value": 60794566222.844215
     }
    },
    {
     "key_as_string": "2016-10-01",
     "total_volume": {
      "value": 0
     }
    },
    {
     "key_as_string": "2016-11-01",
     "total_volume": {
      "value": 61335214951.41825
     }
    },
    {
     "key_as_string": "2016-12-01",
     "total_volume": {
      "value": 3642511980.3839593
     }
    },
    {
     "key_as_string": "2016-09-01",
     "total_volume": {
      "value": 17774506185.89246
     }
    },
    {
     "key_as_string": "2016-10-01",
     "total_volume": {
      "value": 8064264303.107098
     }
    },
    {
     "key_as_string": "2016-11-01",
     "total_volume": {
      "value": 16567197998.770111
     }
    },
    {
     "key_as_string": "2016-12-01",
     "total_volume": {
      "value": 35857654435.62565
     }
    },
    {
     "key_as_string": "2016-09-01",
     "total_volume": {
      "value": 10658008756.411734
     }
    },
    {
     "key_as_string": "2016-10-01",
     "total_volume": {
      "value": 10872891387.720057
     }
    },
    {
     "key_as_string": "2016-11-01",
     "total_volume": {
      "value": 6372470793.608717
     }
    },
    {
     "key_as_string": "2016-12-01",
     "total_volume": {
      "value": 32429765021.02668
     }
    },
    {
     "key_as_string": "2016-09-01",
     "total_volume": {
      "value": 28516091846.06756
     }
    },
    {
     "key_as_string": "2016-10-01",
     "total_volume": {
      "value": 57855308667.06559
     }
    },
    {
     "key_as_string": "2016-11-01",
     "total_volume": {
      "value": 74960500845.44937
     }
    },
    {
     "key_as_string": "2016-12-01",
     "total_volume": {
      "value": 57586728814.669174
     }
    },
    {
     "key_as_string": "2016-09-01",
     "total_volume": {
      "value": 48777095454.973625
     }
    },
    {
     "key_as_string": "2016-10-01",
     "total_volume": {
      "value": 16275404305.95961
     }
    },
    {
     "key_as_string": "2016-11-01",
     "total_volume": {
      "value": 61568034987.86173
     }
    },
    {
     "key_as_string": "2016-12-01",
     "total_volume": {
      "value": 30414809595.61486
     }
    },
    {
     "key_as_string": "2017-01-01",
     "total_volume": {
      "value": 26472430143.08537
     }
    },
    {
     "key_as_string": "2017-02-01",
     "total_volume": {
      "value": 61298148501.46435
     }
    },
    {
     "key_as_string": "2017-03-01",
     "total_volume": {
      "value": 84300293516.84108
     }
    },
    {
     "key_as_string": "2017-04-01",
     "total_volume": {
      "value": 110034798107.42554
     }
    },
    {
     "key_as_string": "2017-05-01",
     "total_volume": {
      "value": 34621024798.352745
     }
    },
    {
     "key_as_string": "2017-06-01",
     "total_volume": {
      "value": 72630487046.33034
     }
    },
    {
     "key_as_string": "2017-07-01",
     "total_volume": {
      "value": 565197648912.126
     }
    },
    {
     "key_as_string": "2017-08-01",
     "total_volume": {
      "value": 56709480066.33492
     }
    },
    {
     "key_as_string": "2017-09-01",
     "total_volume": {
      "value": 156301746658.89706
     }
    },
    {
     "key_as_string": "2017-10-01",
     "total_volume": {
      "value": 59704825518.37596
     }
    },
    {
     "key_as_string": "2017-11-01",
     "total_volume": {
      "value": 54276201337.26605
     }
    },
    {
     "key_as_string": "2017-12-01",
     "total_volume": {
      "value": 211652284806.3086
     }
    },
    {
     "key_as_string": "2017-01-01",
     "total_volume": {
      "value": 120821493180.69
     }
    },
    {
     "key_as_string": "2017-02-01",
     "total_volume": {
      "value": 161955194585.82214
     }
    },
    {
     "key_as_string": "2017-03-01",
     "total_volume": {
      "value": 121546832177.42917
     }
    },
    {
     "key_as_string": "2017-04-01",
     "total_volume": {
      "value": 45456097921.54819
     }
    },
    {
     "key_as_string": "2017-05-01",
     "total_volume": {
      "value": 18056652180.040688
     }
    },
    {
     "key_as_string": "2017-06-01",
     "total_volume": {
      "value": 167497073879.15497
     }
    },
    {
     "key_as_string": "2017-07-01",
     "total_volume": {
      "value": 48843580010.804756
     }
    },
    {
     "key_as_string": "2017-08-01",
     "total_volume": {
      "value": 56429393914.13696
     }
    },
    {
     "key_as_string": "2017-09-01",
     "total_volume": {
      "value": 350022019757.86426
     }
    },
    {
     "key_as_string": "2017-10-01",
     "total_volume": {
      "value": 6835195041.89421
     }
    },
    {
     "key_as_string": "2017-11-01",
     "total_volume": {
      "value": 82984118814.16605
     }
    },
    {
     "key_as_string": "2017-12-01",
     "total_volume": {
      "value": 656006474067.1649
     }
    },
    {
     "key_as_string": "2017-01-01",
     "total_volume": {
      "value": 133656629593.49207
     }
    },
    {
     "key_as_string": "2017-02-01",
     "total_volume": {
      "value": 107251617560.32663
     }
    },
    {
     "key_as_string": "2017-03-01",
     "total_volume": {
      "value": 261808728241.57935
     }
    },
    {
     "key_as_string": "2017-04-01",
     "total_volume": {
      "value": 137605177587.90204
     }
    },
    {
     "key_as_string": "2017-05-01",
     "total_volume": {
      "value": 67428657937.847244
     }
    },
    {
     "key_as_string": "2017-06-01",
     "total_volume": {
      "value": 193465682468.67886
     }
    },
    {
     "key_as_string": "2017-07-01",
     "total_volume": {
      "value": 177131822397.59677
     }
    },
    {
     "key_as_string": "2017-08-01",
     "total_volume": {
      "value": 141348243411.19897
     }
    },
    {
     "key_as_string": "2017-09-01",
     "total_volume": {
      "value": 161392367570.43954
     }
    },
    {
     "key_as_string": "2017-10-01",
     "total_volume": {
      "value": 159543642333.32394
     }
    },
    {
     "key_as_string": "2017-11-01",
     "total_volume": {
      "value": 202329008744.37912
     }
    },
    {
     "key_as_string": "2017-12-01",
     "total_volume": {
      "value": 164607027984.50168
     }
    },
    {
     "key_as_string": "2017-01-01",
     "total_volume": {
      "value": 65005714128.17862
     }
    },
    {
     "key_as_string": "2017-02-01",
     "total_volume": {
      "value": 111539640875.15485
     }
    },
    {
     "key_as_string": "2017-03-01",
     "total_volume": {
      "value": 53307294408.90556
     }
    },
    {
     "key_as_string": "2017-04-01",
     "total_volume": {
      "value": 22205796986.62215
     }
    },
    {
     "key_as_string": "2017-05-01",
     "total_volume": {
      "value": 55964544330.99144
     }
    },
    {
     "key_as_string": "2017-06-01",
     "total_volume": {
      "value": 185795011332.21548
     }
    },
    {
     "key_as_string": "2017-07-01",
     "total_volume": {
      "value": 40987042632.88167
     }
    },
    {
     "key_as_string": "2017-08-01",
     "total_volume": {
      "value": 114759409082.10712
     }
    },
    {
     "key_as_string": "2017-09-01",
     "total_volume": {
      "value": 166360153779.1612
     }
    },
    {
     "key_as_string": "2017-10-01",
     "total_volume": {
      "value": 38815066528.76581
     }
    },
    {
     "key_as_string": "2017-11-01",
     "total_volume": {
      "value": 92958114906.24759
     }
    },
    {
     "key_as_string": "2017-12-01",
     "total_volume": {
      "value": 161549698436.16736
     }
    },
    {
     "key_as_string": "2017-01-01",
     "total_volume": {
      "value": 27148804541.939358
     }
    },
    {
     "key_as_string": "2017-02-01",
     "total_volume": {
      "value": 22063965694.850536
     }
    },
    {
     "key_as_string": "2017-03-01",
     "total_volume": {
      "value": 13716162391.353401
     }
    },
    {
     "key_as_string": "2017-04-01",
     "total_volume": {
      "value": 26250682673.69336
     }
    },
    {
     "key_as_string": "2017-05-01",
     "total_volume": {
      "value": 38130855118.54437
     }
    },
    {
     "key_as_string": "2017-06-01",
     "total_volume": {
      "value": 9046907777.544153
     }
    },
    {
     "key_as_string": "2017-07-01",
     "total_volume": {
      "value": 17639003949.58426
     }
    },
    {
     "key_as_string": "2017-08-01",
     "total_volume": {
      "value": 15295559630.71515
     }
    },
    {
     "key_as_string": "2017-09-01",
     "total_volume": {
      "value": 269279455711.5035
     }
    },
    {
     "key_as_string": "2017-10-01",
     "total_volume": {
      "value": 21165514253.99906
     }
    },
    {
     "key_as_string": "2017-11-01",
     "total_volume": {
      "value": 21664251773.37509
     }
    },
    {
     "key_as_string": "2017-12-01",
     "total_volume": {
      "value": 45930156162.29344
     }
    },
    {
     "key_as_string": "2017-01-01",
     "total_volume": {
      "value": 32110981735.085293
     }
    },
    {
     "key_as_string": "2017-02-01",
     "total_volume": {
      "value": 47612778519.95015
     }
    },
    {
     "key_as_string": "2017-03-01",
     "total_volume": {
      "value": 43886396224.761566
     }
    },
    {
     "key_as_string": "2017-04-01",
     "total_volume": {
      "value": 33344335955.014423
     }
    },
    {
     "key_as_string": "2017-05-01",
     "total_volume": {
      "value": 16650018151.893114
     }
    },
    {
     "key_as_string": "2017-06-01",
     "total_volume": {
      "value": 44728730362.863144
     }
    },
    {
     "key_as_string": "2017-07-01",
     "total_volume": {
      "value": 33599012086.409786
     }
    },
    {
     "key_as_string": "2017-08-01",
     "total_volume": {
      "value": 23959333605.459717
     }
    },
    {
     "key_as_string": "2017-09-01",
     "total_volume": {
      "value": 40085589069.04436
     }
    },
    {
     "key_as_string": "2017-10-01",
     "total_volume": {
      "value": 30563781102.808144
     }
    },
    {
     "key_as_string": "2017-11-01",
     "total_volume": {
      "value": 22573130912.435474
     }
    },
    {
     "key_as_string": "2017-12-01",
     "total_volume": {
      "value": 193562681930.97638
     }
    },
    {
     "key_as_string": "2017-01-01",
     "total_volume": {
      "value": 11072075316.298124
     }
    },
    {
     "key_as_string": "2017-02-01",
     "total_volume": {
      "value": 6676609774.2164345
     }
    },
    {
     "key_as_string": "2017-03-01",
     "total_volume": {
      "value": 121314786251.6181
     }
    },
    {
     "key_as_string": "2017-04-01",
     "total_volume": {
      "value": 6360725606.668537
     }
    },
    {
     "key_as_string": "2017-05-01",
     "total_volume": {
      "value": 383203337.0357575
     }
    },
    {
     "key_as_string": "2017-06-01",
     "total_volume": {
      "value": 6753488720.4240055
     }
    },
    {
     "key_as_string": "2017-07-01",
     "total_volume": {
      "value": 15044471647.81589
     }
    },
    {
     "key_as_string": "2017-08-01",
     "total_volume": {
      "value": 145855049602.1306
     }
    },
    {
     "key_as_string": "2017-09-01",
     "total_volume": {
      "value": 23676339897.703217
     }
    },
    {
     "key_as_string": "2017-10-01",
     "total_volume": {
      "value": 18661491549.90974
     }
    },
    {
     "key_as_string": "2017-11-01",
     "total_volume": {
      "value": 3442544083.506602
     }
    },
    {
     "key_as_string": "2017-12-01",
     "total_volume": {
      "value": 15064947971.022131
     }
    },
    {
     "key_as_string": "2017-01-01",
     "total_volume": {
      "value": 12220329982.4291
     }
    },
    {
     "key_as_string": "2017-02-01",
     "total_volume": {
      "value": 13581255508.34453
     }
    },
    {
     "key_as_string": "2017-03-01",
     "total_volume": {
      "value": 8079356306.686537
     }
    },
    {
     "key_as_string": "2017-04-01",
     "total_volume": {
      "value": 8836525668.332588
     }
    },
    {
     "key_as_string": "2017-05-01",
     "total_volume": {
      "value": 15635221531.310246
     }
    },
    {
     "key_as_string": "2017-06-01",
     "total_volume": {
      "value": 29585358015.649117
     }
    },
    {
     "key_as_string": "2017-07-01",
     "total_volume": {
      "value": 16848746279.747467
     }
    },
    {
     "key_as_string": "2017-08-01",
     "total_volume": {
      "value": 32739611974.324917
     }
    },
    {
     "key_as_string": "2017-09-01",
     "total_volume": {
      "value": 17974907507.64398
     }
    },
    {
     "key_as_string": "2017-10-01",
     "total_volume": {
      "value": 13898305728.424198
     }
    },
    {
     "key_as_string": "2017-11-01",
     "total_volume": {
      "value": 27671434154.30443
     }
    },
    {
     "key_as_string": "2017-12-01",
     "total_volume": {
      "value": 62276182812.10436
     }
    },
    {
     "key_as_string": "2017-01-01",
     "total_volume": {
      "value": 88232988993.30072
     }
    },
    {
     "key_as_string": "2017-02-01",
     "total_volume": {
      "value": 90802715159.55798
     }
    },
    {
     "key_as_string": "2017-03-01",
     "total_volume": {
      "value": 31995891064.911125
     }
    },
    {
     "key_as_string": "2017-04-01",
     "total_volume": {
      "value": 28966379705.354023
     }
    },
    {
     "key_as_string": "2017-05-01",
     "total_volume": {
      "value": 213302780129.26367
     }
    },
    {
     "key_as_string": "2017-06-01",
     "total_volume": {
      "value": 116016468111.60538
     }
    },
    {
     "key_as_string": "2017-07-01",
     "total_volume": {
      "value": 13437945188.967058
     }
    },
    {
     "key_as_string": "2017-08-01",
     "total_volume": {
      "value": 309191091906.7246
     }
    },
    {
     "key_as_string": "2017-09-01",
     "total_volume": {
      "value": 72716251144.43637
     }
    },
    {
     "key_as_string": "2017-10-01",
     "total_volume": {
      "value": 66398275684.05957
     }
    },
    {
     "key_as_string": "2017-11-01",
     "total_volume": {
      "value": 45822681568.15294
     }
    },
    {
     "key_as_string": "2017-12-01",
     "total_volume": {
      "value": 10586728047.825222
     }
    },
    {
     "key_as_string": "2017-01-01",
     "total_volume": {
      "value": 3001408595.2113585
     }
    },
    {
     "key_as_string": "2017-02-01",
     "total_volume": {
      "value": 3114465165.737172
     }
    },
    {
     "key_as_string": "2017-03-01",
     "total_volume": {
      "value": 49512046103.50145
     }
    },
    {
     "key_as_string": "2017-04-01",
     "total_volume": {
      "value": 10897286399.33175
     }
    },
    {
     "key_as_string": "2017-05-01",
     "total_volume": {
      "value": 28220256020.86798
     }
    },
    {
     "key_as_string": "2017-06-01",
     "total_volume": {
      "value": 64808512471.244576
     }
    },
    {
     "key_as_string": "2017-07-01",
     "total_volume": {
      "value": 153764856274.4453
     }
    },
    {
     "key_as_string": "2017-08-01",
     "total_volume": {
      "value": 0
     }
    },
    {
     "key_as_string": "2017-09-01",
     "total_volume": {
      "value": 65891985144.325714
     }
    },
    {
     "key_as_string": "2017-10-01",
     "total_volume": {
      "value": 75272680510.34465
     }
    },
    {
     "key_as_string": "2017-11-01",
     "total_volume": {
      "value": 32050716561.346264
     }
    },
    {
     "key_as_string": "2017-12-01",
     "total_volume": {
      "value": 12970014069.402777
     }
    },
    {
     "key_as_string": "2018-01-01",
     "total_volume": {
      "value": 110068557155.06894
     }
    },
    {
     "key_as_string": "2018-02-01",
     "total_volume": {
      "value": 115930580968.49867
     }
    },
    {
     "key_as_string": "2018-03-01",
     "total_volume": {
      "value": 92880962401.99698
     }
    },
    {
     "key_as_string": "2018-04-01",
     "total_volume": {
      "value": 119936527882.1001
     }
    },
    {
     "key_as_string": "2018-05-01",
     "total_volume": {
      "value": 162258341938.575
     }
    },
    {
     "key_as_string": "2018-01-01",
     "total_volume": {
      "value": 116134520543.50494
     }
    },
    {
     "key_as_string": "2018-02-01",
     "total_volume": {
      "value": 162290067634.5282
     }
    },
    {
     "key_as_string": "2018-03-01",
     "total_volume": {
      "value": 138127935300.75195
     }
    },
    {
     "key_as_string": "2018-04-01",
     "total_volume": {
      "value": 169223194285.0147
     }
    },
    {
     "key_as_string": "2018-05-01",
     "total_volume": {
      "value": 129043945221.26874
     }
    },
    {
     "key_as_string": "2018-01-01",
     "total_volume": {
      "value": 33306983901.24598
     }
    },
    {
     "key_as_string": "2018-02-01",
     "total_volume": {
      "value": 57759375192.46588
     }
    },
    {
     "key_as_string": "2018-03-01",
     "total_volume": {
      "value": 30298331291.38958
     }
    },
    {
     "key_as_string": "2018-04-01",
     "total_volume": {
      "value": 108848674406.57248
     }
    },
    {
     "key_as_string": "2018-05-01",
     "total_volume": {
      "value": 117370233510.89557
     }
    },
    {
     "key_as_string": "2018-01-01",
     "total_volume": {
      "value": 29373653224.826366
     }
    },
    {
     "key_as_string": "2018-02-01",
     "total_volume": {
      "value": 96525107248.94353
     }
    },
    {
     "key_as_string": "2018-03-01",
     "total_volume": {
      "value": 16780477556.697014
     }
    },
    {
     "key_as_string": "2018-04-01",
     "total_volume": {
      "value": 31062954563.691837
     }
    },
    {
     "key_as_string": "2018-05-01",
     "total_volume": {
      "value": 21831885480.241936
     }
    },
    {
     "key_as_string": "2018-01-01",
     "total_volume": {
      "value": 198936511352.41837
     }
    },
    {
     "key_as_string": "2018-02-01",
     "total_volume": {
      "value": 3789213149.5015335
     }
    },
    {
     "key_as_string": "2018-03-01",
     "total_volume": {
      "value": 39666552947.57419
     }
    },
    {
     "key_as_string": "2018-04-01",
     "total_volume": {
      "value": 12443621428.981506
     }
    },
    {
     "key_as_string": "2018-05-01",
     "total_volume": {
      "value": 45979124821.39206
     }
    },
    {
     "key_as_string": "2018-01-01",
     "total_volume": {
      "value": 23727955863.63175
     }
    },
    {
     "key_as_string": "2018-02-01",
     "total_volume": {
      "value": 12081703880.892265
     }
    },
    {
     "key_as_string": "2018-03-01",
     "total_volume": {
      "value": 20950324315.312336
     }
    },
    {
     "key_as_string": "2018-04-01",
     "total_volume": {
      "value": 10845598466.532627
     }
    },
    {
     "key_as_string": "2018-05-01",
     "total_volume": {
      "value": 9701607885.359903
     }
    },
    {
     "key_as_string": "2018-01-01",
     "total_volume": {
      "value": 6468363184.571793
     }
    },
    {
     "key_as_string": "2018-02-01",
     "total_volume": {
      "value": 1689282101.400116
     }
    },
    {
     "key_as_string": "2018-03-01",
     "total_volume": {
      "value": 41277363595.599045
     }
    },
    {
     "key_as_string": "2018-04-01",
     "total_volume": {
      "value": 59297081563.17708
     }
    },
    {
     "key_as_string": "2018-05-01",
     "total_volume": {
      "value": 31108218634.084007
     }
    },
    {
     "key_as_string": "2018-01-01",
     "total_volume": {
      "value": 2072069931.479166
     }
    },
    {
     "key_as_string": "2018-02-01",
     "total_volume": {
      "value": 11672437799.361464
     }
    },
    {
     "key_as_string": "2018-03-01",
     "total_volume": {
      "value": 11354981799.964766
     }
    },
    {
     "key_as_string": "2018-04-01",
     "total_volume": {
      "value": 22477104986.830257
     }
    },
    {
     "key_as_string": "2018-05-01",
     "total_volume": {
      "value": 21659644025.36569
     }
    },
    {
     "key_as_string": "2018-01-01",
     "total_volume": {
      "value": 27421080709.912766
     }
    },
    {
     "key_as_string": "2018-02-01",
     "total_volume": {
      "value": 7642245149.497014
     }
    },
    {
     "key_as_string": "2018-03-01",
     "total_volume": {
      "value": 92258036378.95984
     }
    },
    {
     "key_as_string": "2018-04-01",
     "total_volume": {
      "value": 44613247012.54967
     }
    },
    {
     "key_as_string": "2018-05-01",
     "total_volume": {
      "value": 8108323218.9273205
     }
    },
    {
     "key_as_string": "2018-01-01",
     "total_volume": {
      "value": 128228888037.50372
     }
    },
    {
     "key_as_string": "2018-02-01",
     "total_volume": {
      "value": 70750246709.15254
     }
    },
    {
     "key_as_string": "2018-03-01",
     "total_volume": {
      "value": 32440042583.06895
     }
    },
    {
     "key_as_string": "2018-04-01",
     "total_volume": {
      "value": 20129509756.316288
     }
    },
    {
     "key_as_string": "2018-05-01",
     "total_volume": {
      "value": 1042429111.2034626
     }
    }
   ];

let f = {};
let total = data.forEach(i => {
    console.log(i);
    if(f[i.key_as_string] === undefined) {
        f[i.key_as_string] = {
            'key_as_string': i.key_as_string,
            'total_volume': { 
                'value': i.total_volume.value
            }
        } 
    }
    else {
        f[i.key_as_string] = {
            'key_as_string': i.key_as_string,
            'total_volume': { 
                'value': f[i.key_as_string].total_volume.value + i.total_volume.value
            }
        } 
    }
});

//console.log(total);

console.log(f);

