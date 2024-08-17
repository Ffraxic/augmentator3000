'use client';

import WCLCredentials from '@/components/block/WCLCredentials';
import RegionSelect from '@/components/block/regionSelect';
import initAmplitude from '@/services/amplitude';
import { Typography } from 'antd';

interface Props {
  children: React.ReactNode;
}

initAmplitude();

export default function CoreLayout({ children }: Props) {
  return (
    <div className="relative mx-[20px] flex h-full min-h-dvh flex-col text-white">
      <div className="my-[20px]">
        <h1 className="text-center text-[40px] font-bold text-[#33937F]">
          Augmentator3000
        </h1>
        <p className="mt-[-5px] text-center">Delete aug? Of course.. 😉</p>
      </div>

      <div className="absolute right-0 top-0 z-10">
        <RegionSelect />
      </div>

      <WCLCredentials />

      <>{children}</>

      <div className="mt-auto py-[20px]">
        <div className="flex w-full justify-between">
          <Typography.Text>
            Made with ❤️ by{' '}
            <a href="https://github.com/Liroo" target="_blank">
              Liroo
            </a>
          </Typography.Text>
          <Typography.Text
            className="cursor-pointer select-none"
            onClick={() => {
              localStorage.removeItem('persist:augmentator3000-root');
              window.location.reload();
            }}
          >
            Reset the store
          </Typography.Text>
        </div>

        <div className="flex w-full justify-between">
          <Typography.Text>
            The source code of this website is available{' '}
            <a href="https://github.com/Liroo/auganalyzer" target="_blank">
              on github
            </a>
            .
          </Typography.Text>
          <Typography.Text>
            This website is not affiliated with WarcraftLogs.
          </Typography.Text>
        </div>
      </div>
    </div>
  );
}
