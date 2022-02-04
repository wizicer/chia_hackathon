let a = {
    'additions': [{
        'amount': 10,
        'parent_coin_info': '0x21dc0f7bf19638a3c8789edc2d1c1759e56e2a86b71ae0169bb2bf638b3a5540',
        'puzzle_hash': '0x2562e5fbe7e64325c8ac08bb37c61bab3cf32fd79854800a9d31695b3546f74b'//txch1y43wt7l8uepjtj9vpzan03sm4v70xt7hnp2gqz5ax954kd2x7a9sahqqqw
    },
    {
        'amount': 999999999990,
        'parent_coin_info': '0x21dc0f7bf19638a3c8789edc2d1c1759e56e2a86b71ae0169bb2bf638b3a5540',
        'puzzle_hash': '0xa5a7996102ab32a80480379a4e9b97823377f547ea4fe8335c5ca3faa9d62bad'
    }],
    'amount': 10,
    'confirmed': False,
    'confirmed_at_height': 0,
    'created_at_time': 1643948236,
    'fee_amount': 0,
    'memos': [],
    'name': '0x32607245b05759de73b86fe4ed87e769849aaee1898548fa1eb1a3f4324b400c',//tx
    'removals': [{
        'amount': 1000000000000,
        'parent_coin_info': '0x07bd9fb3dbf187734592e6166bbcd278e4b013cd34927cffb87478ef6c3f22f3',
        'puzzle_hash': '0x2562e5fbe7e64325c8ac08bb37c61bab3cf32fd79854800a9d31695b3546f74b'
    }],
    'sent': 3,
    'sent_to': [['2a3c09b0935b48104e967c3c27906ff541a855262faff3a896ebf4690046a169', 1, None],
    ['67382ee8ad931cd05e8b0dc4b1f526da25eb552940bfd7401bb9176a91931c85', 1, None],
    ['b4238089f8f2873fb810214970e639d99241a55898d4f252127b511e8cbf1951', 1, None]],
    'spend_bundle': {
        'aggregated_signature': '0x8ab8222673a093a5bab0654b4d3e7a42849b2f1e28efa8a743d5e7e1a21a6490da5b6ba13eb1b41051f1d6ac4247d91b06848124dc8af1666b4676c596babcf840f3f3c5591c5f9a78dca86efc5dd33352c5523de210884a3c70a2a6a2ad16da',
        'coin_spends': [{
            'coin': {
                'amount': 1000000000000,
                'parent_coin_info': '0x07bd9fb3dbf187734592e6166bbcd278e4b013cd34927cffb87478ef6c3f22f3',
                'puzzle_hash': '0x2562e5fbe7e64325c8ac08bb37c61bab3cf32fd79854800a9d31695b3546f74b'
            },
            'puzzle_reveal': '0xff02ffff01ff02ffff01ff02ffff03ff0bffff01ff02ffff03ffff09ff05ffff1dff0bffff1effff0bff0bffff02ff06ffff04ff02ffff04ff17ff8080808080808080ffff01ff02ff17ff2f80ffff01ff088080ff0180ffff01ff04ffff04ff04ffff04ff05ffff04ffff02ff06ffff04ff02ffff04ff17ff80808080ff80808080ffff02ff17ff2f808080ff0180ffff04ffff01ff32ff02ffff03ffff07ff0580ffff01ff0bffff0102ffff02ff06ffff04ff02ffff04ff09ff80808080ffff02ff06ffff04ff02ffff04ff0dff8080808080ffff01ff0bffff0101ff058080ff0180ff018080ffff04ffff01b0a36137843fa27905fc4df62853a9a8c76bee9809b29a0152fea65c3e7bffef12f154809b2cd86b1acc67333f8e5af884ff018080',
            // (a (q 2 (q 2 (i 11 (q 2 (i (= 5 (point_add 11 (pubkey_for_exp (sha256 11 (a 6 (c 2 (c 23 ()))))))) (q 2 23 47) (q 8)) 1) (q 4 (c 4 (c 5 (c (a 6 (c 2 (c 23 ()))) ()))) (a 23 47))) 1) (c (q 50 2 (i (l 5) (q 11 (q . 2) (a 6 (c 2 (c 9 ()))) (a 6 (c 2 (c 13 ())))) (q 11 (q . 1) 5)) 1) 1)) (c (q . 0xa36137843fa27905fc4df62853a9a8c76bee9809b29a0152fea65c3e7bffef12f154809b2cd86b1acc67333f8e5af884) 1))
            'solution': '0xff80ffff01ffff33ffa02562e5fbe7e64325c8ac08bb37c61bab3cf32fd79854800a9d31695b3546f74bff0a80ffff33ffa0a5a7996102ab32a80480379a4e9b97823377f547ea4fe8335c5ca3faa9d62badff8600e8d4a50ff680ffff3cffa0542561b0000788ad91b81dbea67a9e62314e6f0d18bc6f7a1e6437fe438567408080ff8080'
            // (() (q (51 0x2562e5fbe7e64325c8ac08bb37c61bab3cf32fd79854800a9d31695b3546f74b 10) (51 0xa5a7996102ab32a80480379a4e9b97823377f547ea4fe8335c5ca3faa9d62bad 0x00e8d4a50ff6) (60 0x542561b0000788ad91b81dbea67a9e62314e6f0d18bc6f7a1e6437fe43856740)) ())
        }]
    },
    'to_puzzle_hash': '0x2562e5fbe7e64325c8ac08bb37c61bab3cf32fd79854800a9d31695b3546f74b',
    'trade_id': None,
    'type': 1,
    'wallet_id': 1
}

let b = {
    'additions': [{
        'amount': 10,
        'parent_coin_info': '0x87f23d289232e45271d58731aa800cb99074cc15bcdaa5c1d86f29d3f738944e',
        'puzzle_hash': '0x2562e5fbe7e64325c8ac08bb37c61bab3cf32fd79854800a9d31695b3546f74b'//txch1y43wt7l8uepjtj9vpzan03sm4v70xt7hnp2gqz5ax954kd2x7a9sahqqqw
    },
    {
        'amount': 999999999980,
        'parent_coin_info': '0x87f23d289232e45271d58731aa800cb99074cc15bcdaa5c1d86f29d3f738944e',
        'puzzle_hash': '0x230f916264bec00fd1dd2b65abd80fd3dc9ab5d4ba76bfc7d3b850de323e09d2'
    }],
    'amount': 10,
    'confirmed': False,
    'confirmed_at_height': 0,
    'created_at_time': 1643954819,
    'fee_amount': 0,
    'memos': [],
    'name': '0x36d011be5bc3f21835d0f69e6641b4124387e6837be52ff1b297347c205e4710',
    'removals': [{
        'amount': 999999999990,
        'parent_coin_info': '0x21dc0f7bf19638a3c8789edc2d1c1759e56e2a86b71ae0169bb2bf638b3a5540',
        'puzzle_hash': '0xa5a7996102ab32a80480379a4e9b97823377f547ea4fe8335c5ca3faa9d62bad'
    }],
    'sent': 3,
    'sent_to': [['2a3c09b0935b48104e967c3c27906ff541a855262faff3a896ebf4690046a169', 1, None],
    ['67382ee8ad931cd05e8b0dc4b1f526da25eb552940bfd7401bb9176a91931c85', 1, None],
    ['b4238089f8f2873fb810214970e639d99241a55898d4f252127b511e8cbf1951', 1, None]], 'spend_bundle': {
        'aggregated_signature': '0xb56c7fd3cf066d92d9fca09832a4cb2272fdc64182b7de023a2cd7728bcc2ae0155a6826340db356d0f3328496b19248133978f360e4ba4bfd99ee852cd5346abb12107f901cf908f15f79af102a65faac9e6000b982dfe60a73f1c4024d5129',
        'coin_spends': [{
            'coin': {
                'amount': 999999999990,
                'parent_coin_info': '0x21dc0f7bf19638a3c8789edc2d1c1759e56e2a86b71ae0169bb2bf638b3a5540',
                'puzzle_hash': '0xa5a7996102ab32a80480379a4e9b97823377f547ea4fe8335c5ca3faa9d62bad'
            },
            'puzzle_reveal': '0xff02ffff01ff02ffff01ff02ffff03ff0bffff01ff02ffff03ffff09ff05ffff1dff0bffff1effff0bff0bffff02ff06ffff04ff02ffff04ff17ff8080808080808080ffff01ff02ff17ff2f80ffff01ff088080ff0180ffff01ff04ffff04ff04ffff04ff05ffff04ffff02ff06ffff04ff02ffff04ff17ff80808080ff80808080ffff02ff17ff2f808080ff0180ffff04ffff01ff32ff02ffff03ffff07ff0580ffff01ff0bffff0102ffff02ff06ffff04ff02ffff04ff09ff80808080ffff02ff06ffff04ff02ffff04ff0dff8080808080ffff01ff0bffff0101ff058080ff0180ff018080ffff04ffff01b090a960570bbc4ba24f4c8c7fc59078633b8081e3ae7e1e2542e499bb71497d3538a25d1ad69aae888f07d8fec2e9590aff018080',
            // (a (q 2 (q 2 (i 11 (q 2 (i (= 5 (point_add 11 (pubkey_for_exp (sha256 11 (a 6 (c 2 (c 23 ()))))))) (q 2 23 47) (q 8)) 1) (q 4 (c 4 (c 5 (c (a 6 (c 2 (c 23 ()))) ()))) (a 23 47))) 1) (c (q 50 2 (i (l 5) (q 11 (q . 2) (a 6 (c 2 (c 9 ()))) (a 6 (c 2 (c 13 ())))) (q 11 (q . 1) 5)) 1) 1)) (c (q . 0x90a960570bbc4ba24f4c8c7fc59078633b8081e3ae7e1e2542e499bb71497d3538a25d1ad69aae888f07d8fec2e9590a) 1))
            'solution': '0xff80ffff01ffff33ffa02562e5fbe7e64325c8ac08bb37c61bab3cf32fd79854800a9d31695b3546f74bff0a80ffff33ffa0230f916264bec00fd1dd2b65abd80fd3dc9ab5d4ba76bfc7d3b850de323e09d2ff8600e8d4a50fec80ffff3cffa0de4391f15478a000516b935236b504eae7befcc0a835016c8bf6ef9a31d2dd8e8080ff8080'
            // (() (q (51 0x2562e5fbe7e64325c8ac08bb37c61bab3cf32fd79854800a9d31695b3546f74b 10) (51 0x230f916264bec00fd1dd2b65abd80fd3dc9ab5d4ba76bfc7d3b850de323e09d2 0x00e8d4a50fec) (60 0xde4391f15478a000516b935236b504eae7befcc0a835016c8bf6ef9a31d2dd8e)) ())
        }]
    },
    'to_puzzle_hash': '0x2562e5fbe7e64325c8ac08bb37c61bab3cf32fd79854800a9d31695b3546f74b',
    'trade_id': None,
    'type': 1,
    'wallet_id': 1
};
