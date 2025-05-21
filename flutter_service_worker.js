'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "284dbc21a9779b6f018659926ca09888",
".git/config": "60f55b8e4a5d079ebec60f2d2dd164be",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2900cb79c82eb46f21ecfebbaf58a9c8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "321196c0817c35ceccacb46b783ec4f0",
".git/logs/refs/heads/main": "321196c0817c35ceccacb46b783ec4f0",
".git/logs/refs/remotes/origin/main": "823f14aa1370741054faf95dc741fab3",
".git/objects/01/aff11053932ef28519d911aceac9196fc10055": "7f1ac1a09a06e0eb84dcf7db90e4c411",
".git/objects/02/db3b46314e8a5e2ce464554b16338c27df0c13": "62e29bd90fc570d5620ef7898db3d254",
".git/objects/03/36ffab82f37f24e537953c3196aa7725bbe776": "fa14655220a5ec58046552fa703ccb32",
".git/objects/03/95c49ca0d93dcb47100916eb1c0da005116280": "21fa1a97db7bca0f662ab1380d0da3ae",
".git/objects/03/b7a5129a1b7a70318dd95960131dc9361c6db6": "fe210ea95e564fe591a5f4e7a1087105",
".git/objects/03/c487d8929298767841514c5f5423516fb2c466": "f2694432265d74dfdc8bb4f2e5aa44e3",
".git/objects/05/453b7acb84eeec78aca01afe8116f5538c8f59": "59f9c0b647eee09f0f016accd8a129f7",
".git/objects/06/59ac91d6597b6c2ae17dd42863e9629f7e0a7d": "173f0ba573b8b618f7f9c2b5dc7bc216",
".git/objects/06/bfe4b50a2c018e4d0c313f1de545d75e172065": "fdacb2db256992d865f97e3c48583601",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/07/4f02a8fcb35bd69b0ece30adbeb20a2ade02c6": "d0d5ea5f1feec857a50ef827626305d9",
".git/objects/07/d26c9de26f51acc89d738d87cbc5b9b24c1a41": "4e72142e1ca66762cd8aff35986c847a",
".git/objects/08/472c35b7d91fa7990f83a4e57e5716fea37f99": "017a4d3b2f46f170813d243feab13c36",
".git/objects/08/c6b82af2044799cc74f7fd77c9772504b1eb64": "920725ed37d8bb132b38fec529bf3a78",
".git/objects/09/cd7cc05e766d68693fcbdcc6c779ca6c5ba9dd": "0900fba3672605d29c6c2818c0d37722",
".git/objects/0b/d2cf7c2fc1199faa3af8be5df2622a3aa798d6": "6b71f9271a2c72fccd22e5c6dfbb7bfa",
".git/objects/0d/370aeaf55b2fe4de40eb525119033b93c655fd": "66b9aaf675a9b58f185e181241a98ae8",
".git/objects/0d/50c65c7c9e05371073ba59c790c9d48a90adc7": "0c0c97e737f704adc5aca048d79e44ea",
".git/objects/0d/8a8323abc5662060fe4ce15ca8bcd78300842b": "834b6ce26e689c6f4a63ce3493d073d2",
".git/objects/0e/35fdac8c7c9b57df24720338b187269212ae4c": "2d4b6a670d8e908cbab5a10b78643f98",
".git/objects/0e/95085b8b595c6a9b5591ee3640517848134e04": "eb5d972448de7a4f39df16a49b6f9a4a",
".git/objects/0e/9d1ed584b4608bec8f5e1c4d0a1194749c6d72": "9be4452d69b8625217f52272a4988dca",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/3d45bb11730248b41c9acdccaeb80d416394b6": "5f7100ded71255c0d9c7974389e2011b",
".git/objects/10/8319f43483b503d894a76f2afcc90b79121b0b": "0141125ca754a2acd5b70ec1f46e815c",
".git/objects/10/9280ce193dc4d5e2e768f3c3c0c9cdd36cbeb1": "b93665cf3aaed01f18ec969d886c215f",
".git/objects/11/bb9fd8dfad8d394a7c546b56c7b4d2b0996a26": "ff94b58da8dd7710214a64cf7d7b399a",
".git/objects/14/097e75815e76fae2a4181a56e32c5baefdeb79": "93e72218c64726b06c3daff221310e6e",
".git/objects/15/b2e135ef77a65b61cf7be18f4110a65d381cf6": "24f2ea32a98bcfaa52464b9f3bf0db8c",
".git/objects/16/286bf691a61b85837a9750d82a094ae0ca5bb1": "b77dd348490393bb30cd161e2ebe785a",
".git/objects/16/3cfc8c985951fa37e649d927dc31a68327edcd": "64e7d4caffda0307e6b49c030dfbead7",
".git/objects/17/622ac5b33d9c10a2d6ff3510d85f1ef1d26552": "50580f80ff7e7bc6d0f86a9490bcab2a",
".git/objects/17/90aeb94d032c9733cc0b5589a1eb12f5bccd24": "4a88363f041e751b9b95016fafb2f55a",
".git/objects/18/52bc66b1826e009b0de0d7746153417e3ed6b7": "af8fdb2440b4db4f08de27c349b3ef48",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/7bfa301913531e267e29ac53dc221f51d92569": "826ece865e9dcf4f7d4c21d8ff92bde9",
".git/objects/1b/a63488649a97eb03f06092cac895c76861f374": "bcfe6a08319f1c82165487c1c1775ef7",
".git/objects/1b/b94bb32180c44bb09c989adf27910dc4baa0d2": "1c098329cb5b05dd3edb6fe72731cb82",
".git/objects/1b/e4fba17b03dda79ace3cf7e6a4d7f206029313": "f929308b6fbe1eec7e9c2943a47e5936",
".git/objects/1c/6d9d7ee7262569b93ebb8a97aed69ca4fa75ea": "658501c5f4ee89fdc66f4e8fd63afeea",
".git/objects/1c/c90df139c91079982f2619cc88975eed35fb25": "991d5cdc0df958eeceb53904eda6b671",
".git/objects/1d/52347e867644bc8d0195030c1b9ca7a52ebeaa": "125322792b1cf558a12e2b58f1483f0a",
".git/objects/1e/44259a165996492adbfb8c2108599b02da636f": "903355ddf347416c380d968fef8198af",
".git/objects/1e/6bafb9003b3fdadb2169d9b199314fd3a8eacd": "68c5545ce7fc533a59da442e955d45e3",
".git/objects/1e/f9af5a380c09d60dae49966c34fe5f692791da": "18c88e0df6410a284c58fa0f5d75a197",
".git/objects/1f/0c72cb3c17271a1d3f2b01741c463bab11dca8": "a69481f82984984db8de33ca7484ca8d",
".git/objects/1f/fc946d41d50d018bbb63e2c36b3c2453a58c64": "97bf1a22e581e44674f2e8d16492d019",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/3de99652690f853c0227e9c8265ea6d8a45556": "7a451f29c1318334fbbd2eb0a0ddb60a",
".git/objects/22/141c841ec15b932de6425d4d59f0ec0296dcdf": "0a94c60767d9443eb37259dedbe03f1e",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/23/1539e671dc450dc50e312301d15abf5e59ce05": "b47e38f4bd3a29613a76ccd16884179b",
".git/objects/23/d364c229f7c235a2e1458b6c0cedd0d4d1f56e": "910066920d54e0ee0f92ed863809663a",
".git/objects/24/eb29fc313d97fc3a5d0710b73eaf7800c6d5ff": "087938dd3ab46afa09343f8e302ca920",
".git/objects/28/492471d18cc6b2fd2c59456122b77a85021831": "1049c4935a53db17b68d71b5d7b27edd",
".git/objects/28/8fc6b4cacd3f24f661d24c744146d971594998": "6135c8982e0b2f9d9cf266e66b62743d",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2d/93e295486937c0595978968cab18fd314726c7": "c3f961036ca0f17a1a0c5dcebe07161b",
".git/objects/2e/8fc5da683910f34fc80e6a83a0447c392036ca": "a8284094522626f083b7d3cc6dd1b435",
".git/objects/2f/9d4985b697ac7ce44579d273cfec08e35852d9": "50b231315aa6bb8ea36a2cc34f67ce2c",
".git/objects/30/8821263772ec6e1455ea170f2885f17cece50c": "62ba775bf5eb999942b9af7dbc224d9a",
".git/objects/30/d916a74f6753b08b1de131519b8414bd1be62d": "1c62c003acf8a5073ac49fbcd961c438",
".git/objects/31/4115b12e3948e2db2aed883e2b522795e43506": "670ec8071d473689ca2c87b74d67b1b3",
".git/objects/32/1f3db87883bf236dee99cf1a770a24b9c745f4": "4599b5c8cfdbf3ce06a407571035ea90",
".git/objects/32/b4090aee3e67e944ea7db9bfc32d9d17202143": "5e14d9283f75501b16d2d4d6b409d061",
".git/objects/33/dba04ab1226d0d9bd1f0d61563a7d26246b2a6": "cda877fbb313f2e2eafd61dd86bdd059",
".git/objects/34/3efa22fafb583af75d83d781359d42b5b36746": "55de8299281a7eb4eacd945d4ee2c107",
".git/objects/36/cf4f38b4061b3adfc0e60455545ac229a67fa0": "23e72eed85ebfca5c7e729eeaba5cbed",
".git/objects/37/a59bf3da506bf589bbd257fa84679f90c59b77": "cd21f3e1a79948a04b592f4e78185eba",
".git/objects/38/90d8af07a1f6a64ffecb0a6beb2808a1eec10f": "8dc86913de9f9e4e0fa9da57edad0c18",
".git/objects/3f/823f369274d58bada0621a03982a51cd18bb4b": "918c14d45dd5b465e4d95c57f9cf495e",
".git/objects/41/bb983ebbd0cf726bbc1fc2467d393530a46996": "89ec8edcee3116682a21c57f7bf5d74e",
".git/objects/42/774391bd842714fdc9f30394118e9f5a98f687": "c3514c301ba64f7936a9190236a86a2f",
".git/objects/44/2743719273d7a26be6256b2fd1e74f2b105590": "a9c07d51ebba45a121abce46951ec926",
".git/objects/44/bac1577d35c5e5cf30250784af36d6edc0c5f1": "b43e7a87cec8d744fa943c325a0979d2",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/47/243c6d838b1d1881871387496b61175bd35fb3": "59d1a5bfcf147193c2ac942e2cba54cb",
".git/objects/47/7efb79775255ca58ab230849f95fddbeec71bf": "afc5fb0789b45ddda2196576efb2c686",
".git/objects/47/f0e02c05eda651c48b4e469551006b6156a8c8": "35f037bfdbf348835b1ee3d99c77e2a7",
".git/objects/48/210cee2534d3411755afa9561ba13ffcbb03b0": "cbd769f806da61e0bd43ee99745aac6e",
".git/objects/48/52ee2da73ceb80fcb2836ae27cb6587001ca89": "887edb957e720e41d6d0040bf9a198db",
".git/objects/48/6a9b8fb94437211a535f6a7d2b568b6c92e8d3": "f94dd9b935b6a81a8c47b30cac58d24d",
".git/objects/48/ce2eb0eab2d0d23af99c2ab38764286226de68": "684df39c2f5f7e689a3103c8917d8d2f",
".git/objects/48/d358c95a41d5b229be32e699c048f231c19831": "7564464fdea0875a2d138a8cc79225d5",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/2a2d9ace2ec6a97a336ec92cbd33c3ab66fa36": "cfa0109bb450b0736a69fb4c3963d753",
".git/objects/4d/91c762343b94f928d1ca592daf1e217f9cdbdf": "ba13b367252691cf3c764de18ac9c199",
".git/objects/4d/c2c24f74d48c641a92fadeda2f24502c6b31b4": "72fcac08fc7154919b3ee9dbf6421106",
".git/objects/51/d638a3a92d8e91a64de7ac7e9ea4caf115dc23": "39b6da5e8f385ccd9daf412191cb4df9",
".git/objects/53/10d92604083d0c5dbddb3907f46dd741491294": "dcbc2367c235d1f6ebd1a6960070f8a0",
".git/objects/53/91d48f5f848d9514ad090463607243a661d928": "a5e4381afb52fb985a411d4249334268",
".git/objects/57/6c51430eea7a7174565f2e63e82c172cb58724": "4b248fee789f82878fb1f0864c3dcc6c",
".git/objects/57/c80f98ac61b8183a8b0f0073a97569e02b0ac2": "fc3747c2d03e0ec3fe0ea1dc9db0c87b",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/4ee9d0ce7cd9d27423f8ac9e307f399a658c90": "1599192345d963aa54f2fe2840deead4",
".git/objects/58/6d8ac588fe0f72692f5e2e418913d70317b23c": "c070d1d70a66ebf1e7940b166c3508c8",
".git/objects/58/8759405d7de37ac44839bd62f7de9a59c3286c": "da4691361c6461cea1ae12c9e94c75f7",
".git/objects/58/a9616c296c7fb273f885cd120f239869012b3b": "71267fe06ba46ad4c3d32b9934d3b9a1",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/d9be9852f29435ddcaeff1dcabdc5efe1e165c": "9d1dddbc39632d62c6030a78630abfed",
".git/objects/59/3315c27f0ce9ce8cd7bfa7d1aeae27eb304e00": "74b78569528201b1f346510cacb6b3f7",
".git/objects/59/bfba893f95152156a59947d5afaaf8957c9739": "d563a38c106e7213bddaaf143225f906",
".git/objects/59/de58976d71ba784e118040b72c3905f49455bc": "b0f39dd3d1d864e5f10187caf10e96dc",
".git/objects/5a/13798ce05e328d9e204d7c82e94f4b751a34c0": "0a7b0086f482d70b245bdf3ab98f20ac",
".git/objects/5b/08bad51f527ec5ae1bbde642ca1ee918e7450c": "d43dfa712c5d047b4a2f068466c2f26e",
".git/objects/5c/36bc90c2637aa44ef93e8073397bd5bed054e8": "cbb1b4640547df2048f8a6a3b64c5fd7",
".git/objects/5c/f47c194074e98729b2e2f7f1fb76cd04dae102": "286ea0b6b4d3735ef2532087217cd38d",
".git/objects/5d/0067e68a8cce018848a32912b220ba28ac7176": "c5e7c09ec2e5c1b62d320aa4a3d54285",
".git/objects/5f/7ec9471c54a0dfa65bc7dc1654deeee59788e2": "a154c1760d9e1c40910b3d7f5cb69554",
".git/objects/60/caf31c6222fbdfbd60ae98d2d1e7e480fe0203": "dbecc47f7538c7979e318f34e365b5e5",
".git/objects/61/7f8e807198d59e3c1a4de0defe12660b60ac7f": "2e3656fa3570b4f05feb287f8a8aaa92",
".git/objects/61/831a6c3851eb65802bb7e843bef90255d01e2b": "c0cac44fd5460ad55b8bb6f80005d300",
".git/objects/62/593c1d9181192b6ce26c5fb05014fd2181da26": "91945533a1743ce8ce62579b08586f73",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/da8cd94515b4e720d9f9ffde2101cfa76aab8f": "86d40ee79341b5d51226c55bd40473ff",
".git/objects/66/ce944a750e7c4f52d77e48257426115eede418": "a9b484da7dcf9d8ebc8b7443234dfd55",
".git/objects/68/33317b4be034b7f947a8460d9065e5c81d5acd": "9a41c4d171ef298f16029e9e45ce289c",
".git/objects/68/3adf03db209634371ebb1f931b74f67b92e37e": "c73c8571872cbb668d960eb6016b6592",
".git/objects/69/a35dc61349d460bdde4b0fda296e04c2b33564": "036c1b31cb124276e4f084533f381ad0",
".git/objects/69/d6134ab2f07ff5960e8f2d4fd534716ab3e6b4": "f15a23d3ae4e19f6a796c119bf2fd4b3",
".git/objects/6a/7bc2824714f974313eb4cc26c22df197133f68": "5dbb3b125e2f49833f59124e8503fb65",
".git/objects/6a/fd130d1c9879ee6f904ffcd9fa3e751bf7c330": "8fd11d3085af1889275bf941faa2adac",
".git/objects/6b/c4066c735d56db9f787cc9d77af72d992777b7": "6e8ba43dca00bf38e581f2bbb0fbe0fd",
".git/objects/6c/75c116666800ebac871bda54832a6a5a2bd74d": "ca713d289ee8d49dbf849ea0816893b8",
".git/objects/6e/90e7f10dda6b6e877bf2f19730854b713b23e4": "e006fef005f4c4aec315d94a580ab804",
".git/objects/6e/c48ce8d650474358b0bdaa5f553030111c08df": "789e7894a1c6d5d1ce07cd498b1953a5",
".git/objects/6f/41dadf175d85c2c0e052163684e22386778136": "fa859c78c6d0e11b93c91c5802c77b72",
".git/objects/6f/49dadf6d03ccebba0d13195c89dc391b648452": "31534e6479f6a9856a81cacbcc04892b",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/56e206bfe7415271edd4da0c2984061919311a": "18cff74bed7f4d89f6bb4f6800daab14",
".git/objects/74/3c5886a7b5b686115fa5776d8c3211d035f3e7": "4fb98e4563f8d6f780078a9a7fa3c29e",
".git/objects/74/5c675194a57df4583f4ece3fc9fa6f9be09a73": "cb209d6f546f0f17faa8ce83c7d8d75d",
".git/objects/74/62db54abdafe97c0372e130abd3fe12e8c0252": "36a6d36901faf69f5c92d70493f07812",
".git/objects/77/b3c56b63cb5341b63c826eb7ba15791b25fba0": "459da54809a70e470ae79110d4b26c7d",
".git/objects/77/c0b9614c20ec2061c71504b8b5de1db445e669": "057753f6aadba114009e08a6e2a89424",
".git/objects/78/98b0547fd0e9989bb7c90351978d2db98ed0ad": "e83a4108507bdc08e382de19a9394541",
".git/objects/78/a6a2e5e0129328d6351cfdd1b3929c0f2f4b1c": "f7bbbd5c59b5591c7da76e6ea5c2a54a",
".git/objects/79/06d7a6a00484b1f04eb816ea33fd439ecb1d22": "3c4a70784363c340e0480f10b9d8941d",
".git/objects/79/944b699daad2103ee37db268c0b0048443e054": "ceef8879d5c5bff36f9f50cbf93bd814",
".git/objects/7b/181ee201c85ab7a8246bdef2d2ee903b4e8118": "5d0ea6a8223cd57fca61890e46389aac",
".git/objects/7b/a3c6ebe1e156997b30b3b149601c0344bc457e": "21b8ed545c76abd61d8bad6894186f7a",
".git/objects/7b/c81d6e0d9a1353aac677f5f466e4da59c9a3b9": "3547c88bbb68b66aefa7075c62046a8f",
".git/objects/7c/75a1e672fd15f18a697300a4cb8cb9d94d02ee": "bd97346c47d100056243ae8c584c2fae",
".git/objects/7c/9dd7282aa72ce783f7c1a725b72e16a928276b": "1866c809a9deb606e15ca12f6884d51f",
".git/objects/7c/a931a1d294c6be1ff12189f756dc0e17120ca3": "f82db72b5a25e03ea9388c7dce0552de",
".git/objects/7c/b35148bc4b135e20dbade54d2ac7bfb1a34799": "071864595529da8c176ed3d3f2193eea",
".git/objects/7e/665401bac5d66324a6e6444419a9e96276e66b": "575e408bdb0be4962a75c892c9ae3cdc",
".git/objects/7e/8d7e3e8a168c63fe3b53803a0fbfe6b70676b5": "c5db89492fb970ec6cfc6586774e92e0",
".git/objects/80/ab347faa5898665d5cdbd44bbdf8c04a30d10e": "0265b64ca6d091641530ec7b76209fc5",
".git/objects/82/457cb57e555efc240bc668a8433e127f7a8452": "af9a165565d94599e1aef4d38ee38a48",
".git/objects/84/659748418b38ff8937c171fe1d906c28c07651": "2c08f1726f8c132400d26175fe171e98",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/84/e4d2f94a84252f835eba73a55f28cd38c318e3": "296f6468ece1d09fe24c688f5ce24c41",
".git/objects/85/83e6facd91ad178d98d99aecda45d63d1b0a58": "05261f81bd041c2c6af616a78a6859c7",
".git/objects/85/cc5eba91abe43810c6f4801fb808e88e2e236e": "f233f5f9863f470b52f7af5aac7c17da",
".git/objects/86/534a1b3edc74e8b039f1f72cf3c727ea56dd09": "3358ce6c81be9eefc48b70aa4f5434b8",
".git/objects/87/81fd3793fa38c2167d8fcb051eda1680396682": "fa3ef616617ebfa377b6c4a8dfa35154",
".git/objects/87/a54a371c95743b25d048aa96c0a902880e0efa": "e6226bbc5e85eb03d70ebbd45537b478",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/8a/1d2020e76346be8baa720ed36f04a02bfb43c7": "c548bd9ce3584c868552cecc8a9571fb",
".git/objects/8a/9e961683d9504fbe592a27763d4a8662e1d364": "c815ef1d9dff9007ad89090ba86942fa",
".git/objects/8b/f9c66bb145aa3d739fbc06951e1ab3c2e981bd": "7cec059126b3d067a34477c6f26d0280",
".git/objects/8c/f7301abf8cfa88249bc8b5efee3706335cd65e": "51f210ed203f7274cc400f04eaa70afd",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/fd977f5fdcd34f50474b992fa27b2ef3b2baba": "d04b3a887c9953540c0fab5a4f9e976a",
".git/objects/8e/aedc7a459480d628b56b74c6baafa72228711e": "2c17c6a12c9e33450aac3b3a6f8bf967",
".git/objects/8f/ef889a1d387df24379ff575408a8fc2d99aeda": "17ce400f02e98d47c0a783e4b29e09bc",
".git/objects/90/5ed3837e27d47aa09a99510eb0865b3ba6ef49": "adb5713d9007214091a30d99b7367534",
".git/objects/91/bd5ae28402933093f155538abd24adfab207dd": "461879a2121deb763ffadda07ad3245a",
".git/objects/92/88a563f2702be50890bb8eb3e88f814ca57e9b": "6ed9d265f9d66240c38db0e7e5b0e330",
".git/objects/92/9d96d5904b151e7190dc1e3c6b3db00beca772": "68dd4ed8fa3ec52d0a8df20a799484ea",
".git/objects/92/a2370264df912b0fbd557ff390830801aa30bb": "494285b0c8d4e5ec47465300d1030b18",
".git/objects/93/1e0091ffeec3ccf062eb01d3948995d262f8d8": "63e7d2d023770f14c345f2549d9bce2f",
".git/objects/93/ea6c9f3c6498411270d50e25db39e9561b618d": "567cd593acdd34a18d0b37761d98787c",
".git/objects/94/686b7c882d97e08744595aafe02539836af966": "9883c1d9e4b70a866c31f75ce8f497d1",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/c663286762fe03feb45cb6e4b5d49ebb7895bd": "8ef3da1f501114979b4d42a2010b6a32",
".git/objects/97/64f5af5e8c6e4eb3e01eff7bd5a1fa9e0e9708": "bbb52936213c9885948dd01c5f7deee2",
".git/objects/97/a9ef6c9ff03293c1534bd18527bcdce1b327b1": "2e47a728ac821a650d34d22bfadbe955",
".git/objects/9b/109979dabadec79006aa133249561a73250e46": "88f4b40834fb2045598f18e8e2c1404a",
".git/objects/9b/cd7c6c85be3a799693215e588822fb28128b90": "5bfd41a0244f8cef35ec13867ef956d8",
".git/objects/9d/3dc53702e24dc304c003be585510bda979c4ef": "4228c588674d0ba60daf19c020601265",
".git/objects/9d/fab3b2dce356136f06a956f3348f058be93a87": "9970fd2df5be951c0f473e3122f45767",
".git/objects/9e/7de91e7e8cc363e4f4aa84e4c570ed20d8a54c": "9b197663273ab8be2b3b8567cfba05d6",
".git/objects/9e/9423f6883ba9dfe16b502b047e707e92ad42ac": "98e20353d85d407f00da6f7e07f3adf1",
".git/objects/a2/9b25edee2e6da343d9045790348a59016bbd58": "9d185f9c685761dbd8a122de9c972f07",
".git/objects/a2/e606c682251e956790da284cdc7573660bba25": "cdd580b6da122cc9a448a8ef56e75af6",
".git/objects/a3/68a7bb8bd3ddda761d36a322cb96844c32d091": "7ba24862105e4c5b7604fb8a68cfa2d6",
".git/objects/a3/81f58faeb6a541011307d72f191d30ff4844e7": "1edec1a56b0d1eccdaedcd639c6da78e",
".git/objects/a5/51d5270bd73027760e72dc1dec6ff334d79977": "ed0374b9b81c7cb0413701ffd8623612",
".git/objects/a5/86066e3039a042fd62af749116f5a8377feb24": "447521a836cd92ab1a95dbda410f0c21",
".git/objects/a7/6476b68419189b5e42ade3f43d34163001cd31": "dbd9766a4a598d87c2d3a359954374eb",
".git/objects/a8/3534bb8a08e321540115885393ba8793e6c1fb": "660686507c33a893acc03e9e36650bda",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/beca8a77accc06d2e3778d8218b94fc36c667d": "19230593cde7422e8f17fe2f04e3575b",
".git/objects/a9/cdffa0ecba4dc1de9d4280e4bea54f93ce598e": "74117f6f7dd392162e94c53a6b4a909d",
".git/objects/ab/4a57831368f6b3b7a921509fadcc4be6aedbde": "0876530d388b3b9e26b2284e4d22fc47",
".git/objects/ab/be31d1d11d070699429177108e07aa9b90746e": "637aeb66881097235e21bab1d116b0a0",
".git/objects/ac/7c28b5aca4cec0878059ff5a4e068b1d654bea": "0c2ab8b1da587499c731587f17a390c9",
".git/objects/ac/dc27731fec70fcb737620b6258f56cf89f7f21": "9a70612b7c4ddbd828736fbe273568f5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/44e47cc4e0fb52a64730c0c6f069289ae3b293": "a4b361cc201218a1b181562204f7da5f",
".git/objects/ad/f774b59296e7a482d58e884e7783ce5b6f32bf": "dee16f85b7b9b6554ec43572029cf773",
".git/objects/ae/e7917920ae23f581c296bf565ab2d847f3be81": "94abdd820316816e02b69c5a4959cbe6",
".git/objects/b0/5b4df61e1aafc1138281276a145b5d09a7d458": "d61f40fabac5fbcbb874d47feb3d329f",
".git/objects/b1/b240f859d1f3667a34a34e57c5d334b2a3eb77": "64a7d38aa182cd33ae4a4349a95b0b05",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "5aaa7cfb09469db11a44067b02367ead",
".git/objects/b1/d4e5c6af33f425131859fb6a8d989c5b961b96": "bc18ffdbdc20d17db7bab077419b9105",
".git/objects/b3/2482281a7f3701520011aca3495a1933ebd440": "eb08a6c7050141298b77578f408e403e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b3/f385bb0aed8a3eda27cbb6bb73522d8c9cfeed": "393d73617e384f192b542556b14a8d61",
".git/objects/b5/8d8b21900d3d67ea2eeed78563c1a60b40b4ff": "6a4a0ce4edbba1894403b76307663fe4",
".git/objects/b5/b4e8ce65b90df23df813bf91c45fd068ac5e82": "625685db81df41c56737265a89d64021",
".git/objects/b7/a0b7d27fed3c5310cd94fa5283b78ac2f53f2e": "6c6fb86ddc7e023c08f77e30ef89d6bd",
".git/objects/b8/9f37c8bbd9226efb621979894862bd1203b996": "94407ec51ec92e311ff2e5d83b064d0c",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/ba/12069fe82ef84c5a86007c2fd181b251ca2545": "d02e4d19becf7bc1a477d376737cb4db",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/c0/48afd15a80228f262429929c3a45c8bbf40a75": "21f8299613933e1e6b5d35f881cf32f2",
".git/objects/c0/9d86cca0a215e83297da0d3f87f54eec71ed70": "ad3c8b067b73948d5a4ecb71c7dd1a95",
".git/objects/c1/dd9d6b67f0bc0490b175aa1b3645f483124010": "f6008a4d2d566043cc8b898db8bda706",
".git/objects/c3/26d7b4944e45a9475f489d6701c79d97e01da0": "b75ab9a4f354f958541223304108669d",
".git/objects/c3/6b27718a8b57d7282a28622750fa9bc4d86b0b": "468bb4eeb7bbdb76c5a7e348f70860ac",
".git/objects/c3/cfc76cb813e951a94177b9122aa6f2c626f1ee": "bebe52950afd5ca9e1c6ae8f7f2a8306",
".git/objects/c4/0ec0e9bd43181a4dc0e2627c018c8677f425ac": "443dbe2a311c598cdb52cae31f00fb67",
".git/objects/c4/698c65ec6bcbbfe56e956076a798021e695fdc": "f42abbd3c62f3e39865e9959797a9e37",
".git/objects/c4/72118d6d2e91f31f35d5597e863ea742ebdcc9": "78410fc796f91ce4f7a23b118ed44200",
".git/objects/c4/b8d28805c10760b6d4eff647802785ea746aa0": "afcc941dc62fbd4252fcb71e3fbdb0f6",
".git/objects/c5/5ec70ef87e1a19373bab8c0240a878e8a0d6ac": "5d73b28e963df57e3d974ff01cf4ea06",
".git/objects/c6/0ff1dbc00c4ca659aa65665819820e7beafa40": "f01bb976e36b232ec3847cc4f6e0d0f8",
".git/objects/c7/2e0585fa57b8083a587ec05e2ea5638055b242": "2b77b89e2d9e8be39a5a3bdd43303711",
".git/objects/c7/a405093c5680f7bf10c533434a2fe817d17d02": "8e665c43b95f3b392cf27eef3920c834",
".git/objects/c8/0f1d401f5c1fc8b9ed7012745cc77ab13f6a2d": "ea786f7842939c6d12a98138f7ca3d81",
".git/objects/c8/6bc3bfa0e1f8e43a2ca3e40b7db2b90e516889": "078981a4fa3e7a6579720a8370dec619",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/801ac38ce083399d19e14d2eeed1d5fc440eff": "e644c0912523ac89b97864a13968bd2f",
".git/objects/ca/ebd73ae13e39ee46f8f11de608342f0a01c05a": "d1bb02aaeccfa3625e0a8def17be1767",
".git/objects/cb/042bc89d294037d4cf186edd96331b305ac59c": "4ff56fcb8e34264202beff17a7ed18a9",
".git/objects/cb/1656664ee5e6b66e66e054917a6ef114e88ddb": "5bd2dddcace469f25950a115fa9876b8",
".git/objects/cb/2df4fe0e8bbd2a146c5c73f1760cf3bda8b1e4": "3ddffeca4efc2a5a1b67e9732f5ccff4",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/a7445d91d1bf2dfc1594edc49feef6ae7069cd": "0e80d5c3b7af3cf35484b7d2f06fab91",
".git/objects/ce/ca360066e35c3218185ba26fdaff16a59b6955": "b17167b511553c884d2d7eb236e3a52e",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/8cc3b56ac4ac9ae7920bd811b99b439fa5cb52": "5d0d945140ee5197ba98abd0db255ee0",
".git/objects/d3/86bf2e0f3da8edf2b5df0c6dead3125c93976a": "6968837bf62f16a18243a9b83708a57c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/ae81980bc522503acaf80f92e63fd444849032": "e83f3d14a41f255fa5e57f4185ce1d3c",
".git/objects/d6/93be3569fd917ddc4697b8e18f172640eb0075": "d95a724a8a6c5956d798861e31e526c0",
".git/objects/d7/8b0f41fedce7f5a59ecfc04c2472170b6b8c0b": "e8196c295ba097916503caa689c321cb",
".git/objects/d7/9cd2b40a794830d5e42acd1beb466092966dca": "cd16b25b5a14ef3b3a935dc0757990b4",
".git/objects/d9/13e87eddd6cf7de2a1369a6ef04f86e5caf26b": "e92159197b36e0bef1a9a36fd628ed31",
".git/objects/d9/297781eca372ed030386595c451d8d4c4303f3": "beaab3755765b52319e145711669c8bb",
".git/objects/d9/9f7eb2cc7b7130fc82de69ae3c73c292e297dc": "d9ca4a6317bea2099524bfb4b2b6f7af",
".git/objects/da/69688bcda8f8680d565bfa3cf2ad59e063d918": "ce6e2575eecbe6a710afad12e356aa92",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/db/c28b28058082e67810485d3b4cd151f37cd47e": "0c0427af2c4159b04963fb2d05716d82",
".git/objects/db/c6c141e4ea6551847d8798c5cbc9bf1dd57683": "03ffc90562c6e4e1cd4001a3c4ac862b",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/df/14242c86b46a3e5727560d2ac7ed275ffaf1da": "27a3ec1cf7146f6b35babb3836e08ad2",
".git/objects/df/9e767769595fdc9168d06b70e4fbb664164724": "7f4daaa6e628a39b63993c42f0abf7c8",
".git/objects/e0/8bd2220e47f990636b74b79cc1739a984f2870": "30b020de63acba0cf35c70114f4bd42b",
".git/objects/e0/953898d1f6f448a20eea42293daa4ce04486d3": "5c7ea317c38b670a912ce6c35e38c519",
".git/objects/e2/045f193b3e77aba5c5f7b5a1a52cf10d8241b5": "64bed86aee48da6dcd31af0b29ef4188",
".git/objects/e2/6453ae7bba6f26abbeb044a94c73b517b6f975": "6004c2294280cf4b202488b69250b6b2",
".git/objects/e7/4146d94997b191fa68166691f49ebe18f5dfc8": "25247e13d6d640e6187ebed37cd5c964",
".git/objects/e8/8e1dcd10d338d62b9d428167c50049d6ee20dc": "73a3bff50785419d8abfe5e98f5c14a6",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e9/84b575e6b363b02fedb753c8dab163412126b5": "d64d3f9529095dc317f46daba70b3730",
".git/objects/e9/d86fbfbd54ac895b9267c78a9ed86ac72873bf": "bcf454df9d2764b1a00ed6de02d03948",
".git/objects/ec/668d14627eb905c953c9b2f137125150c0d462": "3b64eba6cc8f279c76cbf97899ff3fae",
".git/objects/ed/8c08f1ed28f0327cbdb8e128c2326533bc165d": "ec2fd166d392d32bb4f77d310cc4398f",
".git/objects/ee/b0ff5d2004ff721a388e29d55adb3b122e4bf8": "439272fc633bf6415e2240761c33a2f6",
".git/objects/f0/9673d03f362fc9f18203d6d07129dbe527c563": "fdb4ee5183d0f1971823b62d211db960",
".git/objects/f0/f982a0af62b9d8587b42de8ac4a5ba0cc93a77": "9a0405f95a73204b287fe9b068262b59",
".git/objects/f1/fed1f157df60b19c051c02dbf8082ffd53865e": "7e37359993281b845e4bac8db12f27b1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/e5d14bad413ee5af9a643d972b8d86a60614fa": "c99e6839c279bd7aa700249a0bd0ddae",
".git/objects/f4/6c2cd2bc90f5272388889e7fffe9406085b890": "6a4255dbb427070587f9e0c8900d7d7e",
".git/objects/f5/2dcdf372f97ca99a94fbfbff1788511a357e2e": "97ae71e1ce8f16a4666d2cce472b4ca0",
".git/objects/f7/5d168011ccf7a8c1551e356a239cdaacf77660": "34466ad00407db1dbe5fd0661414d3fa",
".git/objects/f7/922113f3d09ca9b824449a58f596fcbc42f204": "b5480cfce4d07d8a20fb40323c24096d",
".git/objects/f7/bd3df54740ba699ff3a8327bcbeb0018b42ace": "35bfa3dffa16ba1534e96b46a25f6b62",
".git/objects/f7/be3e9b487c87388effb346b43f30a8ff0e6275": "876c6973ecf1016a665ad9308a0bc640",
".git/objects/fd/47fd61838d7c6ad7e119924ebaa010ad281fcc": "032233e2099c830ea69ccd11b35a510b",
".git/objects/fd/4dd62b7ae5535c03c8c7a378be1162714eefb9": "2739ee9dd2acdb6f3f4a835230ae610f",
".git/objects/fe/93c911383908e996fea8766bf37ff0e04df582": "dad13575e599bff6f80b9281d4715747",
".git/objects/fe/a8523ca3a2ec7a7e4c3599b029f0e7cceb1924": "653cfe9b9e2f319e80ca44412f09e805",
".git/objects/ff/166001ada8d35495bfa7898b7b85741cf5aaab": "b52777f166b6fe035547513ca8bfc69e",
".git/refs/heads/main": "cb244a2a0ffb5b1d2e91c22e9b2fc9cb",
".git/refs/remotes/origin/main": "cb244a2a0ffb5b1d2e91c22e9b2fc9cb",
"assets/AssetManifest.bin": "5eb84a1145ffe48d6b988ac8b5024ac1",
"assets/AssetManifest.bin.json": "941615a0b79f78c78af2423a842bfd27",
"assets/AssetManifest.json": "fc3d8ef69438a8afa6af39f6c76e63f4",
"assets/assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/images/aboutIcon.svg": "bae78370dde99f09dbf9050b63b58bf1",
"assets/assets/images/apiIcon.svg": "6dc62e852d916a18eb48cda2b289b966",
"assets/assets/images/assistanceIcon.svg": "cfa09fed6419d189f5d47f6741e74629",
"assets/assets/images/brightnessIcon.svg": "9be3c75a38634421642a242de7452941",
"assets/assets/images/codeIcon.svg": "835810eb100ccf812c5b1533d39d83af",
"assets/assets/images/contactIcon.svg": "1bd01457a6daf7ce1300413e0a3ccdea",
"assets/assets/images/contactImage.png": "ed44507641bcbc331afd54cc4d3317a6",
"assets/assets/images/deploymentIcon.svg": "37bf1d928bdae5ba41b91adcfd10a9e3",
"assets/assets/images/educationIcon.svg": "d4c5ae4485f114a21086380fa4334b2f",
"assets/assets/images/educationImage.png": "8cc382bf85d1a03dbf69efd9cda7be85",
"assets/assets/images/emailIcon.svg": "962963d99f7d5b0167fa1e670669c35f",
"assets/assets/images/experience.png": "c4486433746f6ecb65b0028d24d1a38c",
"assets/assets/images/experienceIcon.svg": "9c60f8e49d7fbcb6dd7ed46b9e953f4e",
"assets/assets/images/githubIcon.svg": "c7f4f8cd4e1d67c295179575eab41e59",
"assets/assets/images/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/images/homeIcon.svg": "0071a9273fc8e876ce4b92440ebc1c9d",
"assets/assets/images/linkedinIcon.svg": "d270610a0fa5dc507cb63c4e7a675ff8",
"assets/assets/images/locationIcon.svg": "754d9ba6984e8b70f9bf3e1d228d23bf",
"assets/assets/images/mediumIcon.svg": "b3cc71dc6bdb6308ac0b46579d8e7d0c",
"assets/assets/images/mobileAppDevelopmentIcon.svg": "196ce301e1e12120311566aecc90a6c5",
"assets/assets/images/myPic2.png": "41cea6829654528a62cb5caf97610a08",
"assets/assets/images/performanceIcon.svg": "dcd3ad664c41fcfa8a34b4303f62f34d",
"assets/assets/images/phoneIcon.svg": "59a9a8364f24cc426ad751981a27b619",
"assets/assets/images/portfolioIcon.png": "f5f71544d612fd4c8ad10d8874ac9fd4",
"assets/assets/images/projectIcon.svg": "f7eb6e89f503513c9cd5837a2d1b057e",
"assets/assets/images/serviceIcon.svg": "b57c27fe59c3226e29d2bc2c4cd53f40",
"assets/assets/images/skillsIcon.svg": "2521b5499ad3be3211fc9295be988d06",
"assets/assets/images/skypeIcon.svg": "aa4d7c28c4736b843a5c707a08883b29",
"assets/assets/images/stackoverflowIcon.svg": "e0e322280d2984cf4168a3c1c2c91d94",
"assets/assets/images/test.png": "27746d8a01755f4ae977e7bbe8910fb6",
"assets/assets/images/tools.png": "be364d9f0c4e0f71d9849a59c0dfacf8",
"assets/assets/images/uxIcon.svg": "f7fd74050ce14188a6412212eee00ebd",
"assets/assets/images/webIcon.svg": "8bbdd5df2567d459fc6b20077e256e02",
"assets/assets/images/whatsappIcon.svg": "c89090912ba9a541ddd60ad27345e495",
"assets/assets/images/xIcon.svg": "487b96d315089fbc2b32d21923d8ef14",
"assets/assets/images/youtubeIcon.svg": "91f793cf859e2eae64f3c1ce7b6d6652",
"assets/assets/project_images/coverImageProject1.png": "b59218c183bec0b46f4d22b9a8d732e5",
"assets/assets/project_images/coverImageProject10.png": "a5b7a155bea142ce15c2795628459188",
"assets/assets/project_images/coverImageProject11.png": "9ee1657b38b1994e68ecddf7f203bffa",
"assets/assets/project_images/coverImageProject12.png": "b0ac5ceed8abf0c24d6f0a7dc7388ffe",
"assets/assets/project_images/coverImageProject13.png": "2a2d6f3d90b3637bd41bbfd408004740",
"assets/assets/project_images/coverImageProject2.png": "6f200c750a81d3eeb2cb52a4db862dab",
"assets/assets/project_images/coverImageProject5.png": "f1285d5ae0641978a9bada4ec78ab42d",
"assets/assets/project_images/coverImageProject6.png": "a4782e464b8a54bcaf0a2263b0559af1",
"assets/assets/project_images/coverImageproject7.png": "f3f6c009e9eaf2e9c8c2602f05035232",
"assets/assets/project_images/coverImageProject8.png": "8d795ea69a6a452f7328be29f8dbd405",
"assets/assets/project_images/coverImageProject9.png": "e224cc2f22460bc68db68787dcfe18f8",
"assets/assets/project_images/project10Image1.png": "7becbf91cf26cd3eae49c4f49528bad2",
"assets/assets/project_images/project10Image10.png": "37c06f48a8f00e39c23198b5a6366b07",
"assets/assets/project_images/project10Image11.png": "77ad91b6713d047b8c59d6643db2ca2c",
"assets/assets/project_images/project10Image12.png": "c8d19836465b38b1eb65e11e459d4a69",
"assets/assets/project_images/project10Image13.png": "4caab614663cb4f4ddbeaf2c26f1c38d",
"assets/assets/project_images/project10Image14.png": "7b300c4175803174455d0ca5a41ee259",
"assets/assets/project_images/project10Image2.png": "e6c712169ec8bda7f6cd24334a7916e7",
"assets/assets/project_images/project10Image3.png": "d152aefb19cd49ccd0d0b2a8ba337c01",
"assets/assets/project_images/project10Image4.png": "8a3281a8249ceb57dc266de678b1cd56",
"assets/assets/project_images/project10Image5.png": "421affc0b6d6ae01d6d914de3a05c352",
"assets/assets/project_images/project10Image6.png": "17710ee4cc7671008a45860be6df387b",
"assets/assets/project_images/project10Image7.png": "dc3b5cf495d4c45719737649172f7c58",
"assets/assets/project_images/project10Image8.png": "642cbec371c9cd081bc0e8600d471fc5",
"assets/assets/project_images/project10Image9.png": "b51dea2de96807396e5dd77c6eb53cbe",
"assets/assets/project_images/project11Image1.png": "5427d569fab9e4b99d0a81da522f50d7",
"assets/assets/project_images/project11Image2.png": "163c3994e934de51719726c83fb901ec",
"assets/assets/project_images/project11Image3.png": "f71797e007cec1cd57b0936fa5f754b0",
"assets/assets/project_images/project11Image4.png": "4c535ec9aabd512c36e24bb67eb392ab",
"assets/assets/project_images/project11Image5.png": "66792009d53d61171c709da75c325d67",
"assets/assets/project_images/project11Image6.png": "97da3e0d48a240235f8c4bd16411c333",
"assets/assets/project_images/project11Image7.png": "b64e720fe7abe665acfa470511036e0a",
"assets/assets/project_images/project11Image8.png": "3fb13c4b0055e774de5205e3de95407d",
"assets/assets/project_images/project11Image9.png": "6a69f924d056b79ab5fddcba11ef410c",
"assets/assets/project_images/project12Image1.png": "bf66bcec4425ad6b644342025bf05f29",
"assets/assets/project_images/project12Image10.png": "febd1c179b7a6d7a57d841d10546d05b",
"assets/assets/project_images/project12Image11.png": "872e82ce16f110583a3fa2051c54a74d",
"assets/assets/project_images/project12Image2.png": "7cb84ac6e21824e2b723196d33cb2a64",
"assets/assets/project_images/project12Image3.png": "fdbe7e22c8f30ba0c8c00ab8f7a01349",
"assets/assets/project_images/project12Image4.png": "de32356e32321ddb25371b335341ece5",
"assets/assets/project_images/project12Image5.png": "85ae0a67aee5dbfe57348791a8192181",
"assets/assets/project_images/project12Image6.png": "efb3be680e47291140670e5da295261f",
"assets/assets/project_images/project12Image7.png": "f2f328ec2f1d9b050c3af2fbd56bd6ef",
"assets/assets/project_images/project12Image8.png": "85360b0d711357c3124db0409c04da69",
"assets/assets/project_images/project12Image9.png": "a04635f22e4e64b9b5e0902a29d875f4",
"assets/assets/project_images/project13Image1.png": "5af8eda7a73ee43ffdf6a0eb9a003c31",
"assets/assets/project_images/project13Image10.png": "0ee042a8b732a25c5b531534cb4262f0",
"assets/assets/project_images/project13Image11.png": "74b5e25b9968e8a02545cc5b60aa4272",
"assets/assets/project_images/project13Image2.png": "432e853d80517d6f37e2662b60e52974",
"assets/assets/project_images/project13Image3.png": "6b53dc02b95051b36da69872dfd1102e",
"assets/assets/project_images/project13Image4.png": "1d83f4c2cc5e70f018a23c806b5622b2",
"assets/assets/project_images/project13Image5.png": "4996a5beef4a6187b76a227d0d3169c1",
"assets/assets/project_images/project13Image6.png": "186d470343d9819e89f44c9a14c5a1a1",
"assets/assets/project_images/project13Image7.png": "0f9b83ba7b8d1fde48d3b48d0531c065",
"assets/assets/project_images/project13Image8.png": "8b15f23836a14f50a1ddade510cdb5cb",
"assets/assets/project_images/project13Image9.png": "813ffaf13dcab5882e9b076a74481583",
"assets/assets/project_images/project1Image1.png": "8d8748c346862d5fc8389dddafdf59cc",
"assets/assets/project_images/project1Image2.png": "45e793bc554b3cd0f01ec600adc5a81d",
"assets/assets/project_images/project1Image3.png": "3c81e0120239e8cd8386f14831410830",
"assets/assets/project_images/project1Image4.png": "73d2580321f0c2a1de2486b99011d233",
"assets/assets/project_images/project1Image5.png": "f90a6cb686caca90d9816ea72c17a002",
"assets/assets/project_images/project1Image6.png": "3a057626de37ffefac21db383a696106",
"assets/assets/project_images/project1Image7.png": "40d5c93b0deabaa5b370aa3c34c915bc",
"assets/assets/project_images/project1Image8.png": "45a8cf5f89b363ae61f2b0ec832d34be",
"assets/assets/project_images/project2Image1.png": "7dc43babe6de65a0cc7559370fe13d7c",
"assets/assets/project_images/project2Image10.png": "6ccf915b486dad1eeca6645d8fe78212",
"assets/assets/project_images/project2Image11.png": "82a36a71c81a4d6a4962a6709a3f7d48",
"assets/assets/project_images/project2Image12.png": "e1f7be395b714e977de71f290b8500fa",
"assets/assets/project_images/project2Image13.png": "d1f63c5500168e0cbe9e4fafb7fbe06e",
"assets/assets/project_images/project2Image14.png": "343afac8fa62d9ec99827be8fbd8bac6",
"assets/assets/project_images/project2Image15.png": "8689396363cb56d13f332f8d17a0740a",
"assets/assets/project_images/project2Image16.png": "012b363071728c78f490a87f05ba8cf5",
"assets/assets/project_images/project2Image17.png": "52451f2aa31308a34b95575268f3ff57",
"assets/assets/project_images/project2Image18.png": "1cc0c904fa0c0fc06a9d9cb41648ca0d",
"assets/assets/project_images/project2Image19.png": "c042e8c7771bcbe4884683d278275c3a",
"assets/assets/project_images/project2Image2.png": "f11c594202d2f198f2689ee2730d98b7",
"assets/assets/project_images/project2Image20.png": "92a2acdb57f41b1e4a22c69252df3017",
"assets/assets/project_images/project2Image21.png": "e704932bd414b42575058cb351e06988",
"assets/assets/project_images/project2Image3.png": "466fb9680c8ef48e3ad3f821eef440f6",
"assets/assets/project_images/project2Image4.png": "de4ace8784c5eafac502b4e90f740ac5",
"assets/assets/project_images/project2Image5.png": "b392741ea5515e8e87039876d379eee6",
"assets/assets/project_images/project2Image6.png": "c47f69f1d15c09c48aea8f827bacd9ee",
"assets/assets/project_images/project2Image7.png": "0371368121aa773f28e65580cdaa9433",
"assets/assets/project_images/project2Image8.png": "ea68fecc86f5463a8f3537873a62d0c6",
"assets/assets/project_images/project2Image9.png": "bcce5a269527819ba751c93b0ba97500",
"assets/assets/project_images/project3Image1.png": "de5008991906169bf4551d30ba3805c3",
"assets/assets/project_images/project3Image10.png": "d21bd663caa9ae4a4f3b2b99513bc67e",
"assets/assets/project_images/project3Image11.png": "f933f7fefb15ac9f18458065cf1af990",
"assets/assets/project_images/project3Image12.png": "28329980790b29f0dc04edd43d393e53",
"assets/assets/project_images/project3Image13.png": "4ab4e2f6deee5d6bbfb2826b736908e0",
"assets/assets/project_images/project3Image14.png": "0f0071e374fbc289973323f06c3d3d09",
"assets/assets/project_images/project3Image15.png": "5eb76b36c3493a9cf0eabf37417446a6",
"assets/assets/project_images/project3Image16.png": "bd170bec0b0df4a53e3a74be3c4ac6de",
"assets/assets/project_images/project3Image17.png": "bc68af510b2b3049ea8b381b12644ec5",
"assets/assets/project_images/project3Image18.png": "7580e01d76fbb938821fe090f77f44ed",
"assets/assets/project_images/project3Image19.png": "85be41951d4793a947fa13088181c08b",
"assets/assets/project_images/project3Image2.png": "1fc94f9875b838dc57d15eb345b3ceb0",
"assets/assets/project_images/project3Image20.png": "fb1ba2c92fc4e3426218cd779d9b9178",
"assets/assets/project_images/project3Image21.png": "5e712438d85412090be5d84dd7cbe19b",
"assets/assets/project_images/project3Image22.png": "53f9a1ee4080a670b3e8508680da2117",
"assets/assets/project_images/project3Image23.png": "b9c89dff6fdf5e8aab443a9770da4027",
"assets/assets/project_images/project3Image24.png": "6b24b165512070f81f33c1cb6d2e10f0",
"assets/assets/project_images/project3Image25.png": "a12689b04c8b5f2d53b16585aa73031f",
"assets/assets/project_images/project3Image26.png": "134834907a8698a7d30ef801d8df834d",
"assets/assets/project_images/project3Image27.png": "6f42266e498600c23423533e933db2ca",
"assets/assets/project_images/project3Image28.png": "b9b6640fea3dd5261bf5bf410985ff98",
"assets/assets/project_images/project3Image29.png": "a056ba644a3ddd66206c67654ea6de8c",
"assets/assets/project_images/project3Image3.png": "5b3778d9dd3cf811122ef6c091749cf8",
"assets/assets/project_images/project3Image30.png": "860af41e742dadb9e8a688e18e68d648",
"assets/assets/project_images/project3Image31.png": "180b02eadf819da7b5fce39555290002",
"assets/assets/project_images/project3Image32.png": "608987184495e45902fa2d017a093134",
"assets/assets/project_images/project3Image33.png": "f97725d2a558255c187faf4a6553e64c",
"assets/assets/project_images/project3Image4.png": "2a659eadde780bfe2d57bf22941f3d3e",
"assets/assets/project_images/project3Image5.png": "c24d0685105614e81f8936c09f759f48",
"assets/assets/project_images/project3Image6.png": "1d2a6556b3c5be375d71d8cecfa04cc3",
"assets/assets/project_images/project3Image7.png": "dd9782fa32e451eb186acf7aaca01f9c",
"assets/assets/project_images/project3Image8.png": "d38e7680215ed7460362d11245e1d855",
"assets/assets/project_images/project3Image9.png": "2cd2be436d95511371c5585f23e9e5fa",
"assets/assets/project_images/project4Image1.png": "c0e184ebd4480a33d6572f880883fba7",
"assets/assets/project_images/project4Image10.png": "c7cf5bde6b881721a2fecbd2a0f4efa7",
"assets/assets/project_images/project4Image11.png": "6be5694aee5611d12767b7ddac6dbfeb",
"assets/assets/project_images/project4Image12.png": "5cc68cfe8a3b53edf31bd325cd71885c",
"assets/assets/project_images/project4Image13.png": "ff6f36355243a1a732385e67bd8f50ee",
"assets/assets/project_images/project4Image14.png": "faafcb091cea8d83563fa3ac16cd1476",
"assets/assets/project_images/project4Image15.png": "2a098fa6c9a0ba5bb990a18003a78c1b",
"assets/assets/project_images/project4Image16.png": "3b4bbe89b0f5fe47238e01a8d9a46fe3",
"assets/assets/project_images/project4Image17.png": "ef1db46f45e96ef10dc0cb2debbfca61",
"assets/assets/project_images/project4Image2.png": "1e1d6f7687960f2f47b76d35ecf26333",
"assets/assets/project_images/project4Image3.png": "516abe1be8499a55c04ccd91a88df147",
"assets/assets/project_images/project4Image4.png": "0066d2a1d1b177bd013d811ae09f38e5",
"assets/assets/project_images/project4Image5.png": "4d7a5a73c76e0078e0655f2566977404",
"assets/assets/project_images/project4Image6.png": "07fd2c0687a899c99f757f914edd242b",
"assets/assets/project_images/project4Image7.png": "ea63174d9a95fd1ff3660737c0e7d3c2",
"assets/assets/project_images/project4Image8.png": "3c3a388308d7a40e8031e41cec85c07e",
"assets/assets/project_images/project4Image9.png": "5ea1a776943c8fce963f497aef5bb7cf",
"assets/assets/project_images/project5Image1.png": "1b9e8c580c2ce7448c90095eda5f17a4",
"assets/assets/project_images/project5Image10.png": "c7cf5bde6b881721a2fecbd2a0f4efa7",
"assets/assets/project_images/project5Image11.png": "6be5694aee5611d12767b7ddac6dbfeb",
"assets/assets/project_images/project5Image12.png": "5cc68cfe8a3b53edf31bd325cd71885c",
"assets/assets/project_images/project5Image13.png": "ff6f36355243a1a732385e67bd8f50ee",
"assets/assets/project_images/project5Image14.png": "faafcb091cea8d83563fa3ac16cd1476",
"assets/assets/project_images/project5Image15.png": "2a098fa6c9a0ba5bb990a18003a78c1b",
"assets/assets/project_images/project5Image16.png": "3b4bbe89b0f5fe47238e01a8d9a46fe3",
"assets/assets/project_images/project5Image17.png": "ef1db46f45e96ef10dc0cb2debbfca61",
"assets/assets/project_images/project5Image2.png": "f5dc532a5738707244529cf622c6c16e",
"assets/assets/project_images/project5Image3.png": "1ce389fe2403df36518544ef111da705",
"assets/assets/project_images/project5Image4.png": "b5006040847401a3dee7d8e89e008059",
"assets/assets/project_images/project5Image5.png": "7af27195ff21564acd1cb64062fccbed",
"assets/assets/project_images/project5Image6.png": "f3e0ac142acfd00adbe21d7dcd028031",
"assets/assets/project_images/project5Image7.png": "ee0e0c98460683566cd58dca4f863c22",
"assets/assets/project_images/project5Image8.png": "ba90ca4b1715bb30912487cbc476b7a6",
"assets/assets/project_images/project5Image9.png": "5ea1a776943c8fce963f497aef5bb7cf",
"assets/assets/project_images/project6Image1.png": "e6db234bfc70ad0d0023bdd09400f0d5",
"assets/assets/project_images/project6Image10.png": "9c9dfb2a5e7923355293c7bb93b20b70",
"assets/assets/project_images/project6Image11.png": "f1fed28f74482d75c2958ff630d4e274",
"assets/assets/project_images/project6Image12.png": "c3aeb347781716f5dab1fcdb96f93dbe",
"assets/assets/project_images/project6Image13.png": "e19ffd5094e5ea864371e5578783750f",
"assets/assets/project_images/project6Image14.png": "a0a760d1917c9751a161ec61ddd27dae",
"assets/assets/project_images/project6Image15.png": "f176e1ee66db45eaf9873ef22e4b50e9",
"assets/assets/project_images/project6Image2.png": "7b0ca3b132c75db2d2784544686ab42f",
"assets/assets/project_images/project6Image3.png": "9ad402d2bddadd2360ccd8ed3347d8d2",
"assets/assets/project_images/project6Image4.png": "3319cac24680e9ed2778a9ee31d004bb",
"assets/assets/project_images/project6Image5.png": "1ce7e722b5332acbdbdc4a6ca0358be8",
"assets/assets/project_images/project6Image6.png": "e49efa7589d87fa30b943ecd073adad1",
"assets/assets/project_images/project6Image7.png": "83b16e7d494f95f90fdfda69a24374bc",
"assets/assets/project_images/project6Image8.png": "5e08b8efe7bb4e9aaeadc59effbd3bff",
"assets/assets/project_images/project6Image9.png": "9c58399ac36f3e655509edafa5b7c58d",
"assets/assets/project_images/project7Image1.png": "cc976f6bc88202d85e0fdea161fc7397",
"assets/assets/project_images/project7Image10.png": "64d7a2793a1518f64dfd1403fa4f78d9",
"assets/assets/project_images/project7Image11.png": "fbbf0d048d46dfc51449df624b79a2c8",
"assets/assets/project_images/project7Image2.png": "0b75583b947596ccff9c0caf1e717675",
"assets/assets/project_images/project7Image3.png": "116e2c3ab8bd6a19a4c72e33b26bac1f",
"assets/assets/project_images/project7Image4.png": "733a47f7bb10b902e2176b3480e7d264",
"assets/assets/project_images/project7Image5.png": "f3e13503f3fb81b8ad0e24d94e6442bb",
"assets/assets/project_images/project7Image6.png": "5e85f82455ebf9ac5bf61e1464cde958",
"assets/assets/project_images/project7Image7.png": "77a550d69b2747dca63fd4984ac82de8",
"assets/assets/project_images/project7Image8.png": "e3eab02c30ce401f66f3d0a6f8a5275a",
"assets/assets/project_images/project7Image9.png": "8c9593b8df8967bfe91929b8995522b6",
"assets/assets/project_images/project8Image1.png": "a903c8cea5b0cb0709c59034cd9f8019",
"assets/assets/project_images/project8Image10.png": "e09a09dde90105c1d05f2ae079980161",
"assets/assets/project_images/project8Image2.png": "5ffa16dc7d84de7df69f0e202e0d45f8",
"assets/assets/project_images/project8Image3.png": "f68a7f1597dfc4191b64e8be8447c0a2",
"assets/assets/project_images/project8Image4.png": "f55380d93f6315dd9b4ee21e7eb06bab",
"assets/assets/project_images/project8Image5.png": "2476bcf5b7bb6cef937433cbeb8436f2",
"assets/assets/project_images/project8Image6.png": "10edbf43397d3ae5b96d22bc4eef80d3",
"assets/assets/project_images/project8Image7.png": "035e90d7fc8f5bb1e42aac90a97384d9",
"assets/assets/project_images/project8Image8.png": "0fa0bd4d94c0e47e74b844ebb7b6343d",
"assets/assets/project_images/project8Image9.png": "8095d40fc050b2992b22a4a47463106d",
"assets/assets/project_images/project9Image1.png": "15134fb026f10da1a9f238ec85c03073",
"assets/assets/project_images/project9Image2.png": "a8237a5fa55d9443d7dd4cab5fe788b4",
"assets/assets/project_images/project9Image3.png": "d8a9755e5bb479dbc820da13c67c8214",
"assets/assets/project_images/project9Image4.png": "b59a4fa814449864373951c5bc2d5c8c",
"assets/FontManifest.json": "565c21b99423b702ea202451df3ce532",
"assets/fonts/MaterialIcons-Regular.otf": "20111628fc6f3d72502669c0268e8e88",
"assets/NOTICES": "9a99a584fea12317500ff3414f0ab8f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "7cc95cfb4a0efbb662ab2c31fd1ef421",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "1dfc23f6e834c94d9a873128b6e6811a",
"icons/Icon-192.png": "4ec6376df6ddbd63bd04bc5de81f9774",
"icons/Icon-512.png": "7e3d790eb8a040ff35d80242e1b3edb8",
"icons/Icon-maskable-192.png": "4ec6376df6ddbd63bd04bc5de81f9774",
"icons/Icon-maskable-512.png": "7e3d790eb8a040ff35d80242e1b3edb8",
"index.html": "85dbdbe00a38b2a3d3ead04d635d24be",
"/": "85dbdbe00a38b2a3d3ead04d635d24be",
"main.dart.js": "1ca8088493100e838267024095999020",
"manifest.json": "1398552a9be7ede52bf1f1ce5c48e58e",
"version.json": "c3e81176ec733c288e4cd4446712edda"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
