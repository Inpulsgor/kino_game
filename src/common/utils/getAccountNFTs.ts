import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
// import * as bs58 from 'bs58';

export const getAllNFTs = async (
  connection: Connection,
  providerPubKey: PublicKey,
) => {
  const owner = providerPubKey;

  // console.log('%cPubKey :>> ', 'color: orange', owner);
  // console.log('%cConnection :>> ', 'color: orange', connection);

  const response = await connection.getParsedTokenAccountsByOwner(owner, {
    programId: TOKEN_PROGRAM_ID,
  });

  // console.log('%cResponse :>> ', 'color: blue', response);

  // response.value.forEach(accountInfo => {
  //   console.log(`pubkey: ${accountInfo.pubkey.toBase58()}`);
  //   console.log(`mint: ${accountInfo.account.data['parsed']['info']['mint']}`);
  //   console.log(
  //     `owner: ${accountInfo.account.data['parsed']['info']['owner']}`,
  //   );
  //   console.log(
  //     `decimals: ${accountInfo.account.data['parsed']['info']['tokenAmount']['decimals']}`,
  //   );
  //   console.log(
  //     `amount: ${accountInfo.account.data['parsed']['info']['tokenAmount']['amount']}`,
  //   );
  //   console.log('====================');
  // });

  console.log('getParsedTokenAccountsByOwner :>> ', response);

  if (response?.value) {
    const data = response.value.map(accountInfo => {
      return {
        mint: accountInfo.account.data['parsed']['info']['mint'],
        amount:
          accountInfo.account.data['parsed']['info']['tokenAmount']['amount'],
      };
    });

    return data;
  }

  // let nftsmetadata = response;

  // return nftsmetadata;
};
