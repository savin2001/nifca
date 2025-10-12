
import React from 'react';

const Media = () => {
  // Placeholder data
  const media = [
    {
      id: 1,
      title: "Media 1",
      date: "2025-10-12",
    },
    {
      id: 2,
      title: "Media 2",
      date: "2025-10-11",
    },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main className="px-40 flex flex-1 justify-center py-10">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between items-center gap-4 p-4">
              <h1 className="text-background-dark dark:text-background-light text-3xl font-bold">Media</h1>
            </div>
            <div className="px-4 py-3 @container">
              <div className="overflow-hidden rounded-lg border border-primary/20 dark:border-primary/30 bg-background-light dark:bg-background-dark">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-primary/5 dark:bg-primary/10">
                      <th className="px-4 py-3 text-background-dark dark:text-background-light text-sm font-bold">Title</th>
                      <th className="px-4 py-3 text-background-dark dark:text-background-light text-sm font-bold">Status</th>
                      <th className="px-4 py-3 text-background-dark dark:text-background-light text-sm font-bold">Author</th>
                      <th className="px-4 py-3 text-background-dark dark:text-background-light text-sm font-bold">Date</th>
                      <th className="px-4 py-3 text-right text-background-dark dark:text-background-light text-sm font-bold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-background-dark/80 dark:text-background-light/80 text-sm">
                    {media.map((item) => (
                      <tr key={item.id} className="border-t border-primary/20 dark:border-primary/30">
                        <td className="px-4 py-4 font-semibold text-background-dark dark:text-background-light">{item.title}</td>
                        <td className="px-4 py-4">
                          <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">Published</span>
                        </td>
                        <td className="px-4 py-4">Admin</td>
                        <td className="px-4 py-4">{item.date}</td>
                        <td className="px-4 py-4 text-right">
                          <div className="flex gap-2 justify-end text-primary font-bold">
                            <a className="hover:underline" href="#">Edit</a>
                            <span>|</span>
                            <a className="hover:underline" href="#">Delete</a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Media;
